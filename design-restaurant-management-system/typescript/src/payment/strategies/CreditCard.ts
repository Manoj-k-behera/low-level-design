import { Payment } from "../Payment";
import { PaymentStatus } from "../PaymentStatus";
import { PaymentStrategy } from "../PaymentStrategy";

export class CreditCardPaymentStrategy implements PaymentStrategy {
    pay(amount: number): Payment {
        console.log(`Processing credit card payment of amount: $${amount}`);
        return new Payment(
            'cc_txn_' + new Date().getTime(),
            amount,
            PaymentStatus.SUCCESS
        );
    }
}