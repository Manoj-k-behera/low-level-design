export enum TransactionStatus {
    SUCCESS = 'success',
    FAILED = 'failed'
}

export class Transaction {
    constructor(
        public transactionId: string,
        public accountNumber: string,
        public amount: number,
        public status: TransactionStatus,
        public timestamp: Date = new Date()
    ) {}
}