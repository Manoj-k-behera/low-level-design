import { PaymentStrategy } from "../PaymentStrategy";
import { Transaction } from "../../transaction/Transaction";
import { TransactionStatus } from "../../transaction/TransactionStatus";

export class UPIPaymentStrategy implements PaymentStrategy {
  pay(amount: number): Transaction {
    console.log(`Paid ₹${amount} using UPI`);
    return new Transaction(
      "UPI_" + Date.now(),
      amount,
      TransactionStatus.SUCCESS
    );
  }
}
