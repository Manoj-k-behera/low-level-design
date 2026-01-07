import { Transaction } from "./Transaction";

export class TransactionService {
    private transactions: Transaction[] = [];

    record(transaction: Transaction): void {
        this.transactions.push(transaction);
    }

    getAll(): Transaction[] {
        return this.transactions;
    }
}