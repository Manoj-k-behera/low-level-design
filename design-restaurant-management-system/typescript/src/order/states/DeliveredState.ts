import { MenuItem } from "../../menu/MenuItem";
import { Order } from "../Order";
import { OrderState } from "../OrderState";

export class DeliveredState implements OrderState {
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
    }

    cancel(): void {
        console.log("Delivered orders cannot be cancelled.");
    }
}