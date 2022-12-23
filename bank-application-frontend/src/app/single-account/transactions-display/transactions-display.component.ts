import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../../account.model";
import {AccountService} from "../../account.service";
import {Transaction} from "../../transaction.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-transactions-display',
  templateUrl: './transactions-display.component.html',
  styleUrls: ['./transactions-display.component.css']
})
export class TransactionsDisplayComponent implements OnInit {
  @Input() account: Account;
  transactions: Transaction[];

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accountService.getTransactionsForAccount(this.account.accountNumber).subscribe({
      next: (response: Transaction[]) => this.transactions = response,
      error: (error: HttpErrorResponse) => alert(error)
    });
  }
}
