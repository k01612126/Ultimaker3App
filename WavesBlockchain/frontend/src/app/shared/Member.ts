import {Transaction} from "./Transaction";

export class Member {

  lastname: string;
  firstname: string;
  id: number;
  address: string;
  balance: number;
  cTransactions: number;
  transactions: Array <Transaction>;
}
