import { InvalidStateException } from "../../exceptions/InvalidStateException";
import { Machine } from "../Machine";
import { MachineState } from "../MachineState";
import { IdleState } from "./IdleState";

export class DispensedState implements MachineState {
    constructor(
        private machine: Machine
    ) {}

    addItem(productId: string): void {
        throw new InvalidStateException('Transaction completed')
    }

    placeOrder(): void {
        throw new InvalidStateException('Transaction completed')
    }

    dispense(): void {
        console.log('Items are already dispensed')
        this.machine.reset()
    }

    cancel(): void {
        throw new InvalidStateException('Cannot cancel after dispense')
    }
}