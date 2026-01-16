import { TransactionStatus } from "./TransactionStatus";

export class Transaction{
    private timestamp: Date

    constructor(
        public transactionId: string,
        public amount: number,
        public status: TransactionStatus
    ){
        this.timestamp = new Date()
    }

    getTimestamp(): Date{
        return this.timestamp;
    }
}