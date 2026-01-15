import { MenuItem } from "../../menu/MenuItem";
import { Order } from "../Order";
import { OrderState } from "../OrderState";
import { CancelledState } from "./CancelledState";
import { ReadyState } from "./ReadyState";

export class PreparingState implements OrderState {
    constructor(private order: Order) {}

    addItem(item: MenuItem): void {
    }
    placeOrder(): void {
    }
    prepareOrder(): void {
    }
    markReady(): void {
        this.order.setState(new ReadyState(this.order));
        console.log("Order is ready for delivery.");
    }
    deliver(): void {
    }
    cancel(): void {
        this.order.setState(new CancelledState(this.order));
        console.log("Order has been cancelled.");
    }
}