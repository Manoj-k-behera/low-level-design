import { Card } from "../../bank/Card";
import { ATM } from "../ATM";
import { ATMState } from "../ATMState";

export class OutOfServiceState implements ATMState{
    constructor(
        private atm: ATM
    ) {}

    insertCard(card: Card): void {
        console.log("ATM is out of service. Cannot insert card.");
    }

    ejectCard(): void {
        if (this.atm.currentCard) {
            console.log("Card ejected.");
            this.atm.currentCard = undefined;
        }
    }

    enterPin(pin: number): void {
        console.log("ATM is out of service.");
    }

    withdraw(amount: number): void {
        console.log("ATM is out of service.");
    }
}