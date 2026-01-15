import { Inventory } from "./Inventory";

export class InventoryService {
    private stock: Inventory[] = [];

    addInventoryItem(item: Inventory): void {
        this.stock.push(item);
    }

    getInventoryItem(itemId: string): Inventory | undefined {
        return this.stock.find(item => item['itemId'] === itemId);
    }

    getAllInventoryItems(): Inventory[] {
        return this.stock;
    }

    updateInventoryItemQuantity(itemId: string, quantity: number): void {
        const item = this.getInventoryItem(itemId);
        if (item) {
            item['quantity'] = quantity;
        }
    }

    hasStock(itemId: string, requiredQuantity: number): boolean {
        const item = this.getInventoryItem(itemId);
        return item !== undefined && item['quantity'] >= requiredQuantity;
    }

    consume(itemId: string, quantity: number): void {
        const item = this.getInventoryItem(itemId);
        if (item && item['quantity'] >= quantity) {
            item['quantity'] -= quantity;
        } else {
            throw new Error(`Insufficient stock for item ID: ${itemId}`);
        }
    }
}