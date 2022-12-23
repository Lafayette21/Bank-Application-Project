package com.Lafayette21.bankapplication.exception;

public class NoAccountFoundException extends RuntimeException {
    public NoAccountFoundException(Long id) {
        super("There is no account by id: " + id);
    }

    public NoAccountFoundException(String accountNumber){
        super("There is no account by account number: " + accountNumber);
    }
}
