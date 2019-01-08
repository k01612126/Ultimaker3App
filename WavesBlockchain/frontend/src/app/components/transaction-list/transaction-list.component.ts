import {AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Transaction} from "../../shared/Transaction";

@Component({
  selector: 'app-transaction-list',
  templateUrl: 'transaction-list.component.html',
  styleUrls: ['transaction-list.component.css']
})
export class TransactionListComponent implements OnChanges, AfterViewInit {

  dataSource: MatTableDataSource<Transaction>;

  @Input()
  transactions: Transaction[];

  @Input()
  type: number;

  displayedColumns;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private ref: ChangeDetectorRef) { //Change Detector um Änderungen der View zu überwachen

  }

  ngOnChanges() { //bei Änderungen des Inputs ausgeführt
    switch (this.type) { //Je nach Transaktion werden unterschiedliche Spalten in der Transaktionsliste dargestellt.
      case 1:
        this.displayedColumns = ['id', 'sender', 'recipient', 'fee', 'amount'];
        break;
      case 2:
        this.displayedColumns = ['id', 'sender', 'recipient', 'fee', 'amount'];
        break;
      case 3:
        this.displayedColumns = ['id', 'sender', 'fee', 'assetId', 'quantity'];
        break;
      case 4:
        this.displayedColumns = ['id', 'sender', 'recipient', 'amount', 'assetId'];
        break;
      case 5:
        this.displayedColumns = ['id', 'sender', 'recipient', 'amount', 'assetId'];
        break;
      case 6:
        this.displayedColumns = ['id', 'sender', 'recipient', 'amount', 'assetId'];
        break;
      case 7:
        this.displayedColumns = ['id', 'sender', 'price', 'amount'];
        break;
      case 8:
        this.displayedColumns = ['id', 'sender', 'recipient', 'amount', 'fee'];
        break;
      case 9:
        this.displayedColumns = ['id', 'sender'];
        break;
      case 10:
        this.displayedColumns = ['id', 'sender', 'fee', 'leaseId'];
        break;
      case 11:
        this.displayedColumns = ['id', 'sender', 'fee'];
        break;
    }

    if (this.transactions != null) { //In dieser Komponente werden immer nur alle Transaktionen eines bestimmten typs dargestellt, in transaction-list-all werden mehrere Transaction-lists aufgerufen.
      this.transactions = this.transactions.filter(t => t.type == this.type ? true : false);

      if (this.transactions.length != 0) {
        this.dataSource = new MatTableDataSource<Transaction>(this.transactions); //dataSource als Basis für Mat-Table wird befüllt
        this.dataSource.sort = this.sort; //einträge werden sortiert
        this.dataSource.paginator = this.paginator; //Zuständig für Seiten bei Tabelle
        this.paginator.firstPage();
      }
    }
    this.ref.detectChanges(); //Checkt Änderungen der View und der Children
  }

  ngAfterViewInit() { //Wird aufgerufen wenn die View vollständig instanziert wurde.
    this.ref.detectChanges(); //Checkt Änderungen der View und der Children
  }
}
