import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../account.model";
import {AccountService} from "../account.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-single-account',
  templateUrl: './single-account.component.html',
  styleUrls: ['./single-account.component.css']
})
export class SingleAccountComponent implements OnInit {
  @Input() account: Account;
  operationsVisible: boolean = false;
  transactionsVisible: boolean = false;

  ngOnInit(): void {
  }

  constructor(private accountService: AccountService) {
  }

  showOperations() {
    this.operationsVisible = !this.operationsVisible;
    this.transactionsVisible = false;
  }

  showTransactions() {
    this.transactionsVisible = !this.transactionsVisible;
    this.operationsVisible = false
  }

  deleteAccount() {
    this.accountService.deleteAccountByNumber(this.account.accountNumber).subscribe({
      next: (response: void) => alert("Account by number: " + this.account.accountNumber + " was deleted"),
      error: (error: HttpErrorResponse) => alert("Nie można usunąc konta")
    });
  }
}
