import {Injectable} from "@angular/core";
import {Account} from "./account.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Transaction} from "./transaction.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  apiBaseUrl = 'http://localhost:8080/app/account/'


  constructor(private http: HttpClient) {
  }

  getAccountByAccountNumber(accountNumber: number): Observable<Account> {
    return this.http.get<Account>(this.apiBaseUrl + 'number/' + accountNumber);
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiBaseUrl + 'all');
  }

  addAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.apiBaseUrl + 'add', account);
  }

  payIntoAccount(accountNumber: number, amount: number): Observable<Account> {
    let account = this.getAccountByAccountNumber(accountNumber);
    return this.http.put<Account>(this.apiBaseUrl + accountNumber + '/pay/' + amount, account);
  }

  withdrawFromAccount(accountNumber: number, amount: number): Observable<Account> {
    let account = this.getAccountByAccountNumber(accountNumber);
    return this.http.put<Account>(this.apiBaseUrl + accountNumber + '/withdraw/' + amount, account);
  }

  createTransaction(senderAccount: Account, transaction: Transaction): Observable<Account> {
    return this.http.post<Account>(this.apiBaseUrl + 'transaction/from/' + senderAccount.accountNumber, transaction);
  }

  getTransactionsForAccount(accountNumber: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.apiBaseUrl + 'transactions/of/' + accountNumber);
  }

  deleteAccountByNumber(accountNumber: number): Observable<void> {
    return this.http.delete<void>(this.apiBaseUrl + 'delete/' + accountNumber);
  }
}
