import { ATMState } from "./ATMState";
import { Card } from "../bank/Card";
import { BankService } from "../bank/BankService";
import { CashDispenser } from "../hardware/CashDispenser";
import { IdleState } from "./states/IdleState";
import { TransactionService } from "../transaction/TransactionService";

export class ATM {
    private state: ATMState;
    public currentCard?: Card;

    constructor(
        public cashDispenser: CashDispenser,
        public bankService: BankService,
        public transactionService: TransactionService
    ) {
        this.state = new IdleState(this);
    }

    setState(state: ATMState): void {
        this.state = state;
    }

    insertCard(card: Card): void {
        this.state.insertCard(card);
    }

    ejectCard(): void {
        this.state.ejectCard();
    }

    enterPin(pin: number): void {
        this.state.enterPin(pin);
    }

    withdraw(amount: number): void {
        this.state.withdraw(amount);
    }
}