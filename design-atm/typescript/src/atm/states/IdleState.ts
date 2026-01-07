import { ATMState } from "../ATMState";
import { ATM } from "../ATM";
import { Card } from "../../bank/Card";
import { CardInsertedState } from "./CardInsertedState";

export class IdleState implements ATMState {
    constructor(private atm: ATM) {}

    insertCard(card: Card): void {
        console.log("Card inserted.");
        this.atm.currentCard = card;
        this.atm.setState(new CardInsertedState(this.atm));
    }

    ejectCard(): void {
        console.log("No card to eject.");
    }

    enterPin(): void {
        console.log("Insert card first.");
    }

    withdraw(): void {
        console.log("Insert card first.");
    }
}