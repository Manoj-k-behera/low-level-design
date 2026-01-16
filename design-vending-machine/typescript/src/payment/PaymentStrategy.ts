import { Transaction } from "../transaction/Transaction";

export interface PaymentStrategy{
    pay(amout:number): Transaction;
}