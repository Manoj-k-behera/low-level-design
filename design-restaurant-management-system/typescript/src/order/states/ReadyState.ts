import { MenuItem } from "../../menu/MenuItem";
import { Order } from "../Order";
import { OrderState } from "../OrderState";
import { CancelledState } from "./CancelledState";
import { DeliveredState } from "./DeliveredState";

export class ReadyState implements OrderState {
    constructor(private order: Order) {}

    addItem(item: MenuItem): void {
    }
    placeOrder(): void {
    }
    prepareOrder(): void {
    }
    markReady(): void {
    }
    deliver(): void {
        this.order.setState(new DeliveredState(this.order));
        console.log("Order delivered successfully.");
    }
    cancel(): void {
        this.order.setState(new CancelledState(this.order));
        console.log("Order has been cancelled.");
    }
}