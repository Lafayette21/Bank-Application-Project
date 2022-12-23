import {Component, Input} from '@angular/core';
import {AccountService} from "../../../account.service";
import {Account} from "../../../account.model";
import {HttpErrorResponse} from "@angular/common/http";
import {Transaction} from "../../../transaction.model";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  @Input() senderAccount: Account;
  receiverAccountNumber: number;

  model: Transaction = new Transaction();
  successVisible: boolean = false;

  constructor(private accountService: AccountService) {
  }

  createTransaction() {
    this.accountService.getAccountByAccountNumber(this.receiverAccountNumber).subscribe({
      next: (response: Account) => {
        this.model.receiver = response;
        this.makeTransaction();
      },
      error: (error: HttpErrorResponse) => alert("Account by number " + this.receiverAccountNumber + " does not exist")
    });
  }

  private makeTransaction() {
    this.accountService.createTransaction(this.senderAccount, this.model)
      .subscribe({
        next: (response: Account) => {
          this.senderAccount = response;
          alert("Transaction successfully delivered " + this.model.amount + " to " + this.receiverAccountNumber);
        },
        error: (error: HttpErrorResponse) => alert("Not enough money to transfer")
      });
  }
}
