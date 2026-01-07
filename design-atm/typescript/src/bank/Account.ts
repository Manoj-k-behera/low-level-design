export class Account {
    constructor(
        public accountNumber: string,
        private balance: number = 0
    ) {}

    debit(amout: number): void {
        if (amout > this.balance) {
            throw new Error('Insufficient balance');
        }
        this.balance -= amout;
    }

    getBalance(): number {
        return this.balance;
    }
}