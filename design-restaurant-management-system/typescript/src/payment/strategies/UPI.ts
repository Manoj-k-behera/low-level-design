import { Payment } from "../Payment";
import { PaymentStatus } from "../PaymentStatus";
import { PaymentStrategy } from "../PaymentStrategy";

export class UPIPaymentStrategy implements PaymentStrategy {
    pay(amount: number): Payment {
        return new Payment(
            'txn_' + new Date().getTime(),
            amount,
            PaymentStatus.SUCCESS
        );
    }
}