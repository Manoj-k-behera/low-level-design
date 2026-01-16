export class OutOfStockException extends Error{
    constructor(message: string) {
        super(message)
        this.name = 'OutOfStockException';
    }
}