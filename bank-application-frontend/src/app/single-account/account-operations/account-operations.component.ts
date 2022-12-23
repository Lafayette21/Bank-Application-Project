import {Component, Input} from '@angular/core';
import {Account} from "../../account.model";

@Component({
  selector: 'app-account-operations',
  templateUrl: './account-operations.component.html',
  styleUrls: ['./account-operations.component.css']
})
export class AccountOperationsComponent {
  @Input() account: Account;
  internalAccountTransactionVisible: boolean = false;
  externalTransactionVisible: boolean = false;

  showInternalAccountTransactionInterface() {
    this.internalAccountTransactionVisible = !this.internalAccountTransactionVisible;
    this.externalTransactionVisible = false;
  }

  showExternalAccountTransactionInterface() {
    this.externalTransactionVisible = !this.externalTransactionVisible;
    this.internalAccountTransactionVisible = false;
  }
}
