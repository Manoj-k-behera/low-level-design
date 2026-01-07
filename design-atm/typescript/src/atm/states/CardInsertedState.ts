import { ATM } from "../ATM";
import { ATMState } from "../ATMState";
import { IdleState } from "./IdleState";
import { PinVerifiedState } from "./PinVerifiedState";

export class CardInsertedState implements ATMState {
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
        const card = this.atm.currentCard;
        if (!card) {
            console.log("No card inserted.");
            return;
        }
        if (this.atm.bankService.validatePin(card, pin)) {
            console.log("PIN validated.");
            this.atm.setState(new PinVerifiedState(this.atm))
        } else {
            card.pinRetries += 1;
            console.log("Invalid PIN.");
            if (card.pinRetries >= 3) {
                card.blocked = true;
                console.log('Card blocked')
                this.ejectCard();
            }
        }
    }

    withdraw(): void {
        console.log("Enter Pin first.");
    }
}