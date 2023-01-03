package com.Lafayette21.bankapplication.model;

import com.Lafayette21.bankapplication.exception.NotEnoughMoneyException;
import com.Lafayette21.bankapplication.relationships.Transaction;
import org.springframework.data.neo4j.core.schema.*;

import java.util.List;

@Node("Account")
public class Account {
    @Id
    @GeneratedValue
    private Long id;
    @Property(name = "account_number")
    private Long accountNumber;
    @Property(name = "available_funds")
    private Double availableFunds;
    @Relationship(type = "Transaction", direction = Relationship.Direction.OUTGOING)
    List<Transaction> transactions;

    public Account() {
    }

    public Account(Long accountNumber, Double availableFunds) {
        this.accountNumber = accountNumber;
        this.availableFunds = availableFunds;
    }

    public Long getId() {
        return id;
    }

    public Long getAccountNumber() {
        return accountNumber;
    }

    public Double getAvailableFunds() {
        return availableFunds;
    }

    public List<Transaction> getTransactions() {
        return transactions;
    }

    public void addToAccount(double amount) {
        availableFunds += amount;
    }

    public void takeFromAccount(double amount) {
        validatePossibleAmountOfTransfer(amount);
        availableFunds -= amount;
    }

    private void validatePossibleAmountOfTransfer(double amount){
        if (availableFunds - amount < 0){
            throw new NotEnoughMoneyException();
        }
    }

    public void addTransaction(Transaction transaction){
        transactions.add(transaction);
    }
}
