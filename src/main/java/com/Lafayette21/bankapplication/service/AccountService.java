package com.Lafayette21.bankapplication.service;

import com.Lafayette21.bankapplication.exception.NoAccountFoundException;
import com.Lafayette21.bankapplication.model.Account;
import com.Lafayette21.bankapplication.relationships.Transaction;
import com.Lafayette21.bankapplication.repository.AccountRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {
    private final AccountRepository repository;

    public AccountService(AccountRepository repository) {
        this.repository = repository;
    }

    public List<Account> getAccounts() {
        return repository.findAll();
    }

    public Account createNewAccount(Account account) {
        return repository.save(account);
    }

    public Account deleteAccountByNumber(Long accountNumber) {
        Account accountToDelete = getAccountByAccountNumber(accountNumber);
        repository.delete(accountToDelete);
        return accountToDelete;
    }

    public Account getAccountByAccountNumber(Long accountNumber) {
        return repository.findByAccountNumber(accountNumber)
                .orElseThrow(() -> new NoAccountFoundException(accountNumber));
    }

    public Account payIntoAccount(Long accountNumber, Double amount) {
        Account account = getAccountByAccountNumber(accountNumber);
        account.addToAccount(amount);
        return repository.save(account);
    }

    public Account withdrawFromAccount(Long accountNumber, Double amount) {
        Account accountToUpdate = getAccountByAccountNumber(accountNumber);
        accountToUpdate.takeFromAccount(amount);
        return repository.save(accountToUpdate);
    }

    public List<Transaction> getAccountsTransactions(Long accountNumber) {
        Account account = getAccountByAccountNumber(accountNumber);
        return account.getTransactions();
    }

    public Account createTransaction(Long senderAccountNumber, Transaction transaction) {
        transitionMoneyBetweenAccounts(senderAccountNumber, transaction);

        Account account = getAccountByAccountNumber(senderAccountNumber);
        account.addTransaction(transaction);
        return repository.save(account);
    }

    private void transitionMoneyBetweenAccounts(Long senderAccountNumber, Transaction transaction) {
        double amount = transaction.getAmount();
        withdrawFromAccount(senderAccountNumber, amount);
        payIntoAccount(transaction.getReceiver().getAccountNumber(), amount);
    }
}
