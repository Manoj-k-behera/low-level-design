import { Payment } from "../Payment";
import { PaymentStatus } from "../PaymentStatus";
import { PaymentStrategy } from "../PaymentStrategy";

export class WalletPaymentStrategy implements PaymentStrategy {
    pay(amount: number): Payment {
        console.log(`Processing wallet payment of amount: $${amount}`);
        return new Payment(
            'wallet_txn_' + new Date().getTime(),
            amount,
            PaymentStatus.SUCCESS
        );
    }
}