import { PaymentService } from "../payment/PaymentService";
import { PaymentStrategy } from "../payment/PaymentStrategy";
import { ProductService } from "../product/ProductService";
import { CartItem } from "./CartItem";
import { MachineState } from "./MachineState";
import { IdleState } from "./states/IdleState";

export class Machine{
    public cart: CartItem[] = [];
    private state: MachineState;

    constructor(
        public productService: ProductService,
        public paymentService: PaymentService,
        public paymentStrategy: PaymentStrategy
    ){
        this.state = new IdleState(this);
    }

    setState(state: MachineState): void {
        this.state = state;
    }

    reset(): void {
        this.cart = []
        this.state = new IdleState(this);
    }

    addItem(productId: string): void {
        this.state.addItem(productId);
    }

    placeOrder(): void {
        this.state.placeOrder();
    }

    dispense(): void {
        this.state.dispense();
    }

    cancel():void {
        this.state.cancel();
    }
}