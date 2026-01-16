export class Product {
    constructor(
        public productId: string,
        public name: string,
        private quantity: number,
        private unitPrice: number
    ){}

    getQuantity(): number {
        return this.quantity;
    }

    getPrice(): number {
        return this.unitPrice;
    }

    updateQuantity(newQuantity: number) {
        this.quantity = newQuantity;
    }

    updatePrice(newPrice: number) {
        this.unitPrice = newPrice;
    }
}