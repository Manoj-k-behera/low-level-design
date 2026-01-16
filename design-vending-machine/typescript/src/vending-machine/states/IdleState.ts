import { InvalidStateException } from "../../exceptions/InvalidStateException";
import { OutOfStockException } from "../../exceptions/OutOfStockException";
import { TransactionStatus } from "../../transaction/TransactionStatus";
import { Machine } from "../Machine";
import { MachineState } from "../MachineState";
import { OrderedState } from "./OrderedState";

export class IdleState implements MachineState{
    constructor(
        private machine: Machine
    ){}

    addItem(productId: string): void {
        if (!this.machine.productService.isProductAvailable(productId, 1)) {
            throw new OutOfStockException('Product unavailable')
        }

        const item = this.machine.cart.find(i => i.productId === productId)
        item? item.quantity++ : this.machine.cart.push({productId, quantity: 1});
    }

    placeOrder(): void {
        const amount = this.calculateAmount()

        const transaction = this.machine.paymentService.processPayment(
            this.machine.paymentStrategy,
            amount
        )

        if (transaction.status !== TransactionStatus.SUCCESS) {
            throw new Error('payment failed')
        }

        // consume inventory after successful payment
        this.machine.cart.forEach(item => {
            this.machine.productService.consume(item.productId, item.quantity)
        })
        this.machine.setState(new OrderedState(this.machine))
    }

    dispense(): void {
        throw new InvalidStateException("Order not placed yet");
    }

    cancel(): void {
        this.machine.reset();
    }

    private calculateAmount(): number {
        return this.machine.cart.reduce(
            (sum, item) => sum + this.machine.productService.getPriceById(item.productId) * item.quantity, 0
        );
    }
}