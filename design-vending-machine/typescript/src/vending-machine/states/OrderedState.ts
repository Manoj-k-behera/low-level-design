import { InvalidStateException } from "../../exceptions/InvalidStateException";
import { Machine } from "../Machine";
import { MachineState } from "../MachineState";
import { DispensedState } from "./DispensedState";

export class OrderedState implements MachineState {
    constructor(
        private machine: Machine
    ){}

    addItem(productId: string): void {
        throw new InvalidStateException('cannot add items after order placement')
    }

    placeOrder(): void {
        throw new InvalidStateException('Order already placed')
    }

    dispense(): void {
        console.log('Dispensing items')
        this.machine.setState(new DispensedState(this.machine))
    }

    cancel(): void {
        throw new InvalidStateException('Cannot cancel order after payment')
    }
}