export interface MachineState {
    addItem(productId: string): void;
    placeOrder(): void;
    dispense(): void;
    cancel(): void;
}