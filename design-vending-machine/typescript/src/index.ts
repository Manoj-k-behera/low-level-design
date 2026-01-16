import { PaymentService } from "./payment/PaymentService";
import { PaymentStrategy } from "./payment/PaymentStrategy";
import { UPIPaymentStrategy } from "./payment/strategies/UPIPaymentStrategy";
import { Product } from "./product/Product";
import { ProductService } from "./product/ProductService";
import { Machine } from "./vending-machine/Machine";

const coke = new Product("p1", 'coke', 10, 40);
const chips = new Product('p2', 'chips', 5, 30);

const productService = new ProductService([coke, chips])

// payment setup
const paymentStrategy: PaymentStrategy = new UPIPaymentStrategy()
const paymentService = new PaymentService()

// create machine
const machine = new Machine(
    productService,
    paymentService,
    paymentStrategy
)

// simulate user actions
try {
    machine.addItem('p1');
    machine.addItem('p2');
    machine.addItem('p1');

    machine.placeOrder();
    machine.dispense();
    console.log("✅ Transaction completed successfully");
} catch(err) {
    console.error("❌ Error:", (err as Error).message);
}