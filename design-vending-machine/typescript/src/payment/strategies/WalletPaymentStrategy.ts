import { PaymentStrategy } from "../PaymentStrategy";
import { Transaction } from "../../transaction/Transaction";
import { TransactionStatus } from "../../transaction/TransactionStatus";

export class WalletPaymentStrategy implements PaymentStrategy {
  pay(amount: number): Transaction {
    console.log(`Paid ₹${amount} using Wallet`);
    return new Transaction(
      "WALLET_" + Date.now(),
      amount,
      TransactionStatus.SUCCESS
    );
  }
}
