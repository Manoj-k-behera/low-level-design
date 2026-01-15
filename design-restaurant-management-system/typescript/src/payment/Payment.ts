import { PaymentStatus } from "./PaymentStatus";

export class Payment {
    constructor(
        private paymentId: string,
        private amount: number,
        private status: PaymentStatus
    ){}
}