import { MenuItem } from "../../menu/MenuItem";
import { Order } from "../Order";
import { OrderState } from "../OrderState";
import { CancelledState } from "./CancelledState";
import { PreparingState } from "./PreparingState";

export class PlacedState implements OrderState {
    constructor(private order: Order) {}

    addItem(item: MenuItem): void {
    }
    placeOrder(): void {
    }
    prepareOrder(): void {
        this.order.setState(new PreparingState(this.order));
        console.log("Order is being prepared.");
    }
    markReady(): void {
    }
    deliver(): void {
    }
    cancel(): void {
        this.order.setState(new CancelledState(this.order));
        console.log("Order has been cancelled.");
    }
}