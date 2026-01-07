export class CashDispenser {
    private cashAvailable: number;

    constructor(initialCash: number) {
        this.cashAvailable = initialCash;
    }

    hasCash(amount: number): boolean {
        return this.cashAvailable >= amount;
    }

    dispense(amount: number) {
        if (!this.hasCash(amount)) {
            throw new Error('ATM out of cash');
        }
        this.cashAvailable -= amount;
        console.log(`Dispensed: $${amount}`);
    }
}