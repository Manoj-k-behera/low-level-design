export class InvalidOrderStateException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InvalidOrderStateException";
    }
}