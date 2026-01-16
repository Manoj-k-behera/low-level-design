import { Transaction } from "../../transaction/Transaction";
import { TransactionStatus } from "../../transaction/TransactionStatus";
import { PaymentStrategy } from "../PaymentStrategy";

export class CardPaymentStrategy implements PaymentStrategy{
    pay(amount: number): Transaction{
        console.log(`Paid ₹${amount} using Card`);
        return new Transaction(
            'CARD_' + Date.now(),
            amount,
            TransactionStatus.SUCCESS
        )
    }
}