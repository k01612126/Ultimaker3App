import {Component, Input} from '@angular/core';
import {Transaction} from "../../shared/Transaction";

@Component({
  selector: 'app-transaction-list-all',
  templateUrl: './transaction-list-all.component.html',
  styleUrls: ['./transaction-list-all.component.css']
})
export class TransactionListAllComponent {

  @Input()
  transactions: Transaction[];

  constructor() {

  }
}
