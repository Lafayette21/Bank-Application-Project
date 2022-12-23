import {Account} from "./account.model";

export class Transaction {
  id: number;
  amount: number;
  receiver: Account = new Account();

  constructor() {
  }
}
