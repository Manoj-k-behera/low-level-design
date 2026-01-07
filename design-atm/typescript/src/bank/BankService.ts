import { Card } from "./Card";
import { Account } from "./Account";

export class BankService {
    private cardAccountMap = new Map<string, Account>();

    register(card: Card, account: Account) {
        this.cardAccountMap.set(card.cardNumber, account);
    }

    validatePin(card: Card, inputPin: number): boolean {
        return card.pin === inputPin;
    }

    getAccount(card: Card): Account {
        const account = this.cardAccountMap.get(card.cardNumber);
        if (!account) {
            throw new Error('Account not found');
        }
        return account;
    }
}