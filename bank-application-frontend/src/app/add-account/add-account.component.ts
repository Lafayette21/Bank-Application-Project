import {Component, OnInit} from '@angular/core';
import {AccountService} from "../account.service";
import {Account} from "../account.model";
import {generateAccountNumber} from "./accountNumberGenerator";

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  model: Account = new Account();
  successfullySubmitted: boolean = false;

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.model.accountNumber = generateAccountNumber(1000);
    this.accountService.addAccount(this.model).subscribe({
      next: (response: Account) => {
        alert("Stworzono nowe konto");
        this.successfullySubmitted = true;
      }
    });


  }
}
