package com.Lafayette21.bankapplication.relationships;

import com.Lafayette21.bankapplication.model.Account;
import org.springframework.data.neo4j.core.schema.*;

@RelationshipProperties
public class Transaction {
    @Id
    @GeneratedValue
    private Long id;
    @Property(name = "amount")
    private final double amount;
    @TargetNode
    private final Account receiver;

    public Transaction(double amount, Account receiver) {
        this.amount = amount;
        this.receiver = receiver;
    }

    public Long getId() {
        return id;
    }

    public double getAmount() {
        return amount;
    }

    public Account getReceiver() {
        return receiver;
    }
}
