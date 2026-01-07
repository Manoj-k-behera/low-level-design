import { Card } from "../bank/Card";

export interface ATMState {
    insertCard(card: Card): void;
    ejectCard(): void;
    enterPin(pin: number): void;
    withdraw(amount: number): void;
}