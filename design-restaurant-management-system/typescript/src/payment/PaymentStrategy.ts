import { Payment } from "./Payment";

export interface PaymentStrategy {
    pay(amount: number): Payment;
}