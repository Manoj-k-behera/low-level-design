import { OutOfOrderException } from "../../exception/OutOfStockException";
import { MenuItem } from "../../menu/MenuItem";
import { Order } from "../Order";
import { OrderState } from "../OrderState";
import { CancelledState } from "./CancelledState";
import { PlacedState } from "./PlacedState";

export class CreatedState implements OrderState {
    constructor(private order: Order) {}

    addItem(item: MenuItem): void {
        this.order.items.push(item);
    }

    placeOrder(): void {

        // check inevntory
        for (const item of this.order.items) {
            if (!this.order.inventoryService.hasStock(item.id, 1))
                throw new OutOfOrderException(`Item ${item.name} is out of stock.`);

        }
        // consume inventory
        for(const item of this.order.items) {
            this.order.inventoryService.consume(item.id, 1);
        }

        // process payment
        const payment = this.order.paymentService.processPayment(this.getTotalAmount());

        if (!payment || payment['status'] !== 'SUCCESS') {
            this.order.setState(new CancelledState(this.order));
            throw new Error("Payment failed. Cannot place order.");
        }

        this.order.setState(new PlacedState(this.order));
        console.log(`Order ${this.order.orderId} has been placed.`);
    }

    prepareOrder(): void {
    }

    markReady(): void {
    }

    deliver(): void {
    }

    cancel(): void {
        this.order.setState(new PlacedState(this.order));
        console.log("Order has been cancelled.");
    }

    private getTotalAmount(): number {
        let total = 0;
        for (const item of this.order.items) {
            total += item.price;
        }
        return total;
    }
}