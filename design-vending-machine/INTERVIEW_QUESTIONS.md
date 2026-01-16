# Vending Machine – LLD Interview Questions (Tier-1)

## Core Design Questions

### 1. Why did you use the State pattern?
The vending machine behavior changes based on lifecycle (Idle → Ordered → Dispensed).
State pattern eliminates conditional logic and keeps transitions explicit.

---

### 2. Why not use if-else checks instead of states?
If-else leads to scattered logic and is hard to extend.
State pattern centralizes behavior per state and enforces valid transitions.

---

### 3. Why is inventory consumed after payment and not during item selection?
Because reservation is not consumption.
Consuming inventory before payment can block stock unnecessarily and cause inconsistencies.

---

### 4. Why is Payment implemented using Strategy pattern?
Payment methods vary independently of vending machine logic.
Strategy pattern allows adding new payment modes without modifying existing code.

---

### 5. Why is PaymentService stateless?
Payment is a per-transaction concern.
Keeping PaymentService stateless avoids lifecycle issues and makes it reusable and testable.

---

## Concurrency & Consistency

### 6. How would you prevent race conditions in inventory?
Use atomic updates or optimistic locking at the database layer.
JVM locks are avoided in distributed systems.

---

### 7. What happens if payment fails?
The order remains in Idle state.
Inventory is not consumed.

---

## State-Related Questions

### 8. Can a user add items after placing an order?
No.
OrderedState explicitly blocks addItem() to prevent invalid transitions.

---

### 9. Why is there a separate DispensedState?
It represents a terminal state and prevents re-dispensing or cancellation after completion.

---

## Extensibility Questions

### 10. How would you add a new payment method?
Create a new PaymentStrategy implementation and plug it in.

---

### 11. How would you support refunds?
Introduce a RefundService and handle compensation logic before DispensedState.

---

### 12. How would you support multiple users?
Introduce a Session or Order abstraction per user interaction.

---

## One-Line Summary

> The vending machine models lifecycle using State pattern and payment variability using Strategy pattern while ensuring correct inventory and payment semantics.
