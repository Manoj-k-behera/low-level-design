# 🍽 Restaurant Management System – LLD (SDE-2 / Tier-1)

This project implements a **Restaurant Management System** using:
- **State Pattern** → Order lifecycle
- **Strategy Pattern** → Payment methods
- Clean domain-driven folder structure
- Real-world constraints (inventory, payment, cancellation)

---

## 🔹 Core Design Questions

### Q1. Why State Pattern?
Order behavior changes based on lifecycle state (Created → Placed → Preparing → Delivered).
State pattern eliminates conditional logic and keeps transitions explicit.

---

### Q2. Why Strategy Pattern for payment?
Payment methods vary independently of order lifecycle.
Strategy pattern allows adding new payment modes without modifying order logic.

---

### Q3. Why do we need OrderService?
- Order should not generate its own ID
- Order tracking should be centralized
- Keeps domain entities lightweight

---

## 🔹 Inventory & Consistency Questions

### Q4. How is inventory handled safely?
Inventory is validated and consumed **before** order preparation.
In real systems, this would be done using atomic DB updates or transactions.

---

### Q5. What if payment fails?
Order transitions to `CancelledState`.
Inventory consumption would be compensated in a real system.

---

## 🔹 Concurrency & Transactions

### Q6. How do you prevent race conditions?
- Avoid `hasStock + consume`
- Prefer atomic updates or pessimistic locking
- Use optimistic locking when contention is low

---

### Q7. Do JVM locks help here?
No. JVM locks don’t work in distributed systems.
Consistency must be enforced at DB or distributed-lock level.

---

## 🔹 Sharding & Scale

### Q8. Can orders span multiple shards?
No. Each order is designed to stay within a single shard.
Cross-shard workflows require Saga-based compensation.

---

## 🔹 Extension Questions

- Add refund strategy
- Add coupon/discount strategy
- Add reservation with TTL
- Support multiple restaurants

---

## 🔹 One-Line Summary

> “The system models order lifecycle using the State pattern and payment variability using the Strategy pattern, while keeping inventory and consistency concerns explicit.”
