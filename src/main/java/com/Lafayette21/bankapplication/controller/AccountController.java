package com.Lafayette21.bankapplication.controller;

import com.Lafayette21.bankapplication.model.Account;
import com.Lafayette21.bankapplication.relationships.Transaction;
import com.Lafayette21.bankapplication.service.AccountService;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("https://bank-application-frontend.herokuapp.com/")
@RequestMapping("app/account")
public class AccountController {
    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/all")
    public List<Account> getAccounts(){
        return accountService.getAccounts();
    }


    @GetMapping("/number/{accountNumber}")
    public Account getAccountByAccountNumber(@PathVariable Long accountNumber) {
        return accountService.getAccountByAccountNumber(accountNumber);
    }

    @GetMapping("/transactions/of/{accountNumber}")
    public List<Transaction> getAccountsTransactions(@PathVariable Long accountNumber){
        return accountService.getAccountsTransactions(accountNumber);
    }

    @PostMapping("/add")
    public Account createNewAccount(@RequestBody Account account) {
        return accountService.createNewAccount(account);
    }

    @DeleteMapping("delete/{accountNumber}")
    public Account deleteAccountByNumber(@PathVariable Long accountNumber) {
        return accountService.deleteAccountByNumber(accountNumber);
    }

    @Transactional
    @PutMapping("/{accountNumber}/pay/{amount}")
    public Account payIntoAccount(@PathVariable Long accountNumber, @PathVariable Double amount) {
        return accountService.payIntoAccount(accountNumber, amount);
    }

    @Transactional
    @PutMapping("/{accountNumber}/withdraw/{amount}")
    public Account withdrawFromAccount(@PathVariable Long accountNumber, @PathVariable Double amount) {
        return accountService.withdrawFromAccount(accountNumber, amount);
    }

    @Transactional
    @PostMapping("/transaction/from/{senderAccountNumber}")
    public Account createTransaction(@PathVariable Long senderAccountNumber, @RequestBody Transaction transaction){
        return  accountService.createTransaction(senderAccountNumber, transaction);
    }
}
