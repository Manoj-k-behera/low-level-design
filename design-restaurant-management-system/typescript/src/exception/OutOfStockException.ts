export class OutOfOrderException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "OutOfOrderException";
    }
}