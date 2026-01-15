import { Order } from "./order/Order";
import { PaymentStrategy } from "./payment/PaymentStrategy";
import { PaymentService } from "./payment/PaymentService";
import { InventoryService } from "./inventory/InventoryService";
import { MenuService } from "./menu/MenuService";
import { MenuItem } from "./menu/MenuItem";
import { UPIPaymentStrategy } from "./payment/strategies/UPI";
import { Inventory } from "./inventory/Inventory";

const item1 = new Inventory(
    "item1", 100, "Bun", 10
);

const item2 = new Inventory(
    "item2", 50, "Patty", 5
);

const inventoryService = new InventoryService();
inventoryService.addInventoryItem(item1);
inventoryService.addInventoryItem(item2);

const paymentStrategy: PaymentStrategy = new UPIPaymentStrategy();
const paymentService = new PaymentService(paymentStrategy);

const order = new Order(
    "order1",
    inventoryService,
    paymentService
)

order.addItem(new MenuItem("item1", "Bun", 20));
order.addItem(new MenuItem("item2", "Patty", 50));

order.placeOrder();
order.prepareOrder();
order.markReady();
order.deliver();
// order.cancel();

inventoryService.getAllInventoryItems()
