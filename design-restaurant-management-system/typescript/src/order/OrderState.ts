import { MenuItem } from "../menu/MenuItem";

export interface OrderState {
    addItem(item: MenuItem): void
    placeOrder(): void
    prepareOrder(): void
    markReady(): void
    deliver(): void
    cancel(): void
}