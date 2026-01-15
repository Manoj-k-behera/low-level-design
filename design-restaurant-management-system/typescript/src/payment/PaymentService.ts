import { Payment } from "./Payment";
import { PaymentStrategy } from "./PaymentStrategy";

export class PaymentService {
    constructor(private paymentStrategy: PaymentStrategy) {}

    processPayment(amount: number): Payment {
        return this.paymentStrategy.pay(amount);
    }
}