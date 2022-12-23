import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { AddAccountComponent } from './add-account/add-account.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {AccountService} from "./account.service";
import {HttpClientModule} from "@angular/common/http";
import { TransactionComponent } from './single-account/account-operations/transaction/transaction.component';
import { SingleAccountComponent } from './single-account/single-account.component';
import { SelfMoneyOperationsComponent } from './single-account/account-operations/self-money-operations/self-money-operations.component';
import { AccountOperationsComponent } from './single-account/account-operations/account-operations.component';
import { TransactionsDisplayComponent } from './single-account/transactions-display/transactions-display.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AllAccountsComponent,
    AddAccountComponent,
    TransactionComponent,
    SingleAccountComponent,
    SelfMoneyOperationsComponent,
    AccountOperationsComponent,
    TransactionsDisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
