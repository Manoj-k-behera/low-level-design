import { InventoryService } from "../inventory/InventoryService";
import { MenuItem } from "../menu/MenuItem";
import { PaymentService } from "../payment/PaymentService";
import { OrderState } from "./OrderState";
import { CreatedState } from "./states/CreatedState";

export class Order {
    public items: MenuItem[] = [];
    private state: OrderState;

    constructor(
        public orderId: string,
        public inventoryService: InventoryService,
        public paymentService: PaymentService
    ) {
        this.state = new CreatedState(this);
    }

    setState(newState: OrderState): void {
        this.state = newState;
    }

    addItem(item: MenuItem): void {
        this.state.addItem(item);
    }

    placeOrder(): void {
        this.state.placeOrder();
    }

    prepareOrder(): void {
        this.state.prepareOrder();
    }

    markReady(): void {
        this.state.markReady();
    }

    deliver(): void {
        this.state.deliver();
    }

    cancel(): void {
        this.state.cancel();
    }

}