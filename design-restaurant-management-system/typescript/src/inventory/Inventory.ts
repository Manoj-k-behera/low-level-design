export class Inventory {
    constructor(
        private itemId: string,
        private quantity: number,
        private name: string,
        private threshold: number
    ) {}
}