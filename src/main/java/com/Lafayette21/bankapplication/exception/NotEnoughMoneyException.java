package com.Lafayette21.bankapplication.exception;

public class NotEnoughMoneyException extends RuntimeException{
    public NotEnoughMoneyException() {
        super("Not enough money for transfer");
    }
}
