import { Transaction } from "../transaction/Transaction";
import { PaymentStrategy } from "./PaymentStrategy";

export class PaymentService{
    processPayment(
        strategy: PaymentStrategy,
        amount: number
    ): Transaction{
        return strategy.pay(amount);
    }
}