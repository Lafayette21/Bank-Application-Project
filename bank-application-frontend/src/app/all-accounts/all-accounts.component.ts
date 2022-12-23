import {Component, OnInit} from '@angular/core';
import {AccountService} from "../account.service";
import {Account} from "../account.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.css']
})
export class AllAccountsComponent implements OnInit {
  accounts: Account[];

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe({
      next: (response: Account[]) => this.accounts = response,
      error: (error: HttpErrorResponse) => alert(error)
    });
  }


}
