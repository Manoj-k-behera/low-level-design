export class Card {
    constructor(
        public cardNumber: string,
        public pin: number,
        public pinRetries: number = 0,
        public blocked: boolean = false
    ) {}
}