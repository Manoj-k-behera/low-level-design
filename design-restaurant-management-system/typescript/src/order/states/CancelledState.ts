import { Inventory } from "../../inventory/Inventory";
import { MenuItem } from "../../menu/MenuItem";
import { Order } from "../Order";
import { OrderState } from "../OrderState";

export class CancelledState implements OrderState {
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
        for (const item of this.order.items) {
            this.order.inventoryService.updateInventoryItemQuantity(item.id, 1);
        }
        console.log("Order is already cancelled.");
    }
}