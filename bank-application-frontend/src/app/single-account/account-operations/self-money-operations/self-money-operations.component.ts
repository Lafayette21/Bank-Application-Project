import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Account} from "../../../account.model";
import {AccountService} from "../../../account.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-self-money-operations',
  templateUrl: './self-money-operations.component.html',
  styleUrls: ['./self-money-operations.component.css']
})
export class SelfMoneyOperationsComponent {
  @Input() account: Account;
  amount: number;

  constructor(private accountService: AccountService) {
  }

  withdrawFromAccount() {
    this.accountService.withdrawFromAccount(this.account.accountNumber, this.amount).subscribe({
      next: (response: Account) => {
        this.account = response;
        alert("Transaction successfully");
      },
      error: (error: HttpErrorResponse) => alert("Not enough available money to withdraw")
    });

  }

  payIntoAccount() {
    this.accountService.payIntoAccount(this.account.accountNumber, this.amount)
      .subscribe({
        next: (response: Account) => {
          this.account = response;
          alert("Transaction Successfull");
        },
        error: (error: HttpErrorResponse) => alert("Transaction failed")
      });
  }
}
