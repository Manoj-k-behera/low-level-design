# 🏦 ATM Low-Level Design (LLD) – Tier-1 Interview Prep

This repository contains a **FAANG-level Low Level Design (LLD)** implementation of an **ATM system** using **TypeScript**, applying:
- State Design Pattern
- SOLID principles
- Clean architecture
- Real-world constraints (cash dispenser, transactions, failures)

This README also documents **all possible interview questions** that can be asked based on this design.

---

## 📌 1. Requirement Clarification Questions

Interviewers expect you to ask these before designing:

1. Does ATM support multiple banks?
2. Is this single ATM or ATM network?
3. Should ATM support deposits and transfers?
4. Is balance maintained by ATM or bank?
5. How many PIN retries before blocking?
6. Should ATM support multiple accounts per card?
7. What happens if ATM runs out of cash?
8. Do we need transaction history?
9. Is concurrency required?
10. Are we designing hardware + software or only software?

---

## 📌 2. Core Design Questions (Very Common)

### Q1. Why did you choose State Pattern?
- ATM behavior changes based on internal state
- Avoids large `if-else` blocks
- Open-Closed Principle compliant

### Q2. Why not use `if-else`?
- Hard to extend
- Violates OCP
- Becomes unmaintainable as states grow

### Q3. Who controls state transitions?
- The **state itself**
- Keeps transition logic cohesive

---

## 📌 3. State Pattern Deep-Dive Questions

1. What are the states in ATM?
   - IdleState
   - CardInsertedState
   - PinVerifiedState
   - OutOfServiceState

2. Can ATM accept a card in OutOfServiceState?
   - No, state blocks invalid operations

3. Can state objects access ATM internals?
   - Yes, via controlled reference

4. How do you add a new state?
   - Implement ATMState
   - Plug into flow without modifying existing states

---

## 📌 4. Transaction & Consistency Questions (Important)

### Q: Why do we need TransactionService?
- Audit & compliance
- Failure tracking
- Separation of concerns

### Q: What if cash is dispensed but DB update fails?
- Real systems rely on reconciliation
- Physical cash consistency > DB consistency

### Q: Are transactions immutable?
- Yes, once created they should not change

---

## 📌 5. Cash Dispenser Questions

1. Why is CashDispenser separate from ATM?
   - ATM cash ≠ account balance
   - SRP compliance

2. What if ATM has insufficient cash?
   - Transition to OutOfServiceState
   - Eject card safely

3. Can ATM dispense partial cash?
   - Depends on requirement
   - Usually NO for simplicity

---

## 📌 6. PIN & Security Questions

1. How many PIN retries allowed?
   - Typically 3

2. What happens after max retries?
   - Card is blocked
   - Card is ejected

3. Where is PIN validation done?
   - BankService, not ATM

4. Is PIN stored securely?
   - In real systems: hashed & encrypted

---

## 📌 7. Concurrency & Scalability Questions

### Q: Can two users use same ATM simultaneously?
- No, ATM is single-session

### Q: How is concurrency handled across ATMs?
- Account debit protected at BankService / DB level

### Q: What locking strategy is used?
- Database transactions / optimistic locking

---

## 📌 8. SOLID Principles Mapping (Very Common)

| Principle | Where Applied |
|--------|---------------|
| SRP | CashDispenser, TransactionService |
| OCP | Adding new ATM states |
| LSP | All states interchangeable |
| ISP | ATMState interface |
| DIP | ATM depends on services |

---

## 📌 9. Failure & Edge Case Questions

1. ATM runs out of cash mid-transaction
2. Network failure while validating PIN
3. Power failure after cash dispense
4. Bank service timeout
5. Card removed forcefully
6. Invalid denomination request

---

## 📌 10. Extension Questions (Design Maturity)

### Q: How would you add Deposit?
- Add DepositState
- Add CashAcceptor hardware
- Record CREDIT transaction

### Q: How would you add Fund Transfer?
- Add TransferState
- Two account operations with rollback support

### Q: How would you add Multi-Account support?
- Map card → multiple accounts
- Prompt user to select account

---

## 📌 11. Design Comparison Questions

1. ATM vs Vending Machine
2. ATM vs Parking Meter
3. ATM vs Elevator (state heavy)
4. ATM vs Online Banking (stateless)

---

## 📌 12. Testing Questions

1. How do you unit test states?
   - Mock ATM & services
2. How do you test failure cases?
   - Simulate exceptions
3. How do you test concurrency?
   - Integration tests

---

## 📌 13. Limitations of Current Design (Honest Answers)

- Single ATM instance
- No real hardware integration
- No distributed transactions
- No monitoring/metrics

(Interviewers LOVE honest trade-offs)

---

## 📌 14. Final Interview Pitch (Memorize This)

> “This design uses the State pattern to model ATM behavior cleanly.  
> It separates hardware, bank logic, and transaction auditing while remaining extensible and testable.  
> Real-world constraints like cash availability, PIN retries, and failure handling are modeled explicitly.”

---

## ✅ Status

✔ FAANG-ready  
✔ SDE-2 / SDE-3 compatible  
✔ Real-world modeling  
✔ Clean TypeScript implementation  

---

🚀 **Author**: Manoj Behera  
📌 **Tech Stack**: TypeScript, Node.js, OOP, Design Patterns
