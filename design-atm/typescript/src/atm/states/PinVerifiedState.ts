import { ATM } from "../ATM";
import { ATMState } from "../ATMState";
import { IdleState } from "./IdleState";
import { OutOfServiceState } from "./OutOfServiceState";
import { Transaction, TransactionStatus } from "../../transaction/Transaction";

export class PinVerifiedState implements ATMState {
    constructor(private atm: ATM) {}

    insertCard(): void {
        console.log("Card already inserted.");
    }

    ejectCard(): void {
        console.log("Card ejected.");
        this.atm.currentCard = undefined;
        this.atm.setState(new IdleState(this.atm));
    }

    enterPin(pin: number): void {
        console.log("PIN already verified.");
    }

    withdraw(amount: number): void {
        const card = this.atm.currentCard;
        if (!card) {
            console.log("No card inserted.");
            return;
        }
        const account = this.atm.bankService.getAccount(card);

        if (!this.atm.cashDispenser.hasCash(amount)) {
            console.log("ATM is out of cash.");
            const transaction = new Transaction(
                "txn_" + Date.now(),
                account.accountNumber,
                amount,
                TransactionStatus.FAILED
            );
            this.atm.transactionService.record(transaction);
            this.atm.setState(new OutOfServiceState(this.atm));
            this.ejectCard();
            return;
        }
        const transaction = new Transaction(
            "txn_" + Date.now(),
            account.accountNumber,
            amount,
            TransactionStatus.SUCCESS
        );
        this.atm.transactionService.record(transaction);
        account.debit(amount);
        this.atm.cashDispenser.dispense(amount);
        console.log('Transaction successful. Please collect your cash.');
        this.ejectCard();
    }
}