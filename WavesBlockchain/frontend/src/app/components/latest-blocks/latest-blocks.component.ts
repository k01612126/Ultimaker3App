import {Component, ViewChild} from '@angular/core';
import {WavesApiService} from "../../services/waves-api-service";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Dataservice} from "../../services/dataservice";
import {BlockHeader} from "../../shared/BlockHeader";

@Component({
  selector: 'app-latest-blocks',
  templateUrl: 'latest-blocks.component.html',
  styleUrls: ['latest-blocks.component.css']
})
export class LatestBlocksComponent {

  displayedColumns = ['height', 'timestamp', 'generator', 'blocksize', 'transactions']; //Definiert welche Spalten in der Tabelle Angezeigt werden.
  dataSource: MatTableDataSource<BlockHeader>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageSize = 20; //standardmäßig werden die letzten 20 Transaktionen angezeigt
  blockchainHeight: number;
  current: number;
  isLoading = true;
  transactions: number;

  constructor(private wavesSevice: WavesApiService, public dataservice: Dataservice) { //Initialisieren des WavesService und des Dataservice.
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;

    wavesSevice.getBlockchainHeight().subscribe(blockchainHeight => { //Auslesen und speichern der aktuellen Blockchainhöhe aus der API
      this.blockchainHeight = blockchainHeight.height;
      this.paginator.length = this.blockchainHeight;
      this.fillDataSource(); //Auslesen der Daten für die Tabelle
    });
  }

  fillDataSource() { //Auslesen der Daten für die Tabelle
    this.isLoading = true;
    this.current = this.blockchainHeight - (this.pageSize * this.paginator.pageIndex); //Ermitteln der aktuell anzuzeigenden Blöcke.
    this.wavesSevice.getBlockHeaders(this.current - this.pageSize, this.current) //Auslesen und speichern der Blockheader aus der API mittels WavesService
      .subscribe(result => {
        this.isLoading = false;
        this.dataSource.data = result;

        this.dataSource.sort = this.sort;
      });
  }

  addRouterData(blockHeader: BlockHeader): void { //Erstellen des URLS für die Detailansicht eines Blocks.
    this.dataservice.blockHeader = blockHeader;
  }
}
