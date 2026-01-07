import { ATM } from "./atm/ATM";
import { Account } from "./bank/Account";
import { BankService } from "./bank/BankService";
import { Card } from "./bank/Card";
import { CashDispenser } from "./hardware/CashDispenser";
import { TransactionService } from "./transaction/TransactionService";

const bankService = new BankService();
const dispenser = new CashDispenser(5000);
const transactionService = new TransactionService();
const atm = new ATM(dispenser, bankService, transactionService);

const card = new Card("1234-5678-9012-3456", 1234);
const account = new Account("ACC-01", 1000);

bankService.register(card, account);

atm.insertCard(card);   
atm.enterPin(1234);
atm.withdraw(200);