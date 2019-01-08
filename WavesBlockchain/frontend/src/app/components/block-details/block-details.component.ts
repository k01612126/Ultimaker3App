import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WavesApiService} from "../../services/waves-api-service";
import {BlockHeader} from "../../shared/BlockHeader";
import {Dataservice} from "../../services/dataservice";
import {Transaction} from "../../shared/Transaction";

@Component({
  selector: 'app-block-details',
  templateUrl: 'block-details.component.html',
  styleUrls: ['block-details.component.css']
})
export class BlockDetailsComponent implements OnInit {

  maxBlockHeight: number;
  blockHeight: number;
  blockHeader: BlockHeader;

  transactions: Transaction[];
  isLoading = true;

  constructor(private route: ActivatedRoute, private wavesSevice: WavesApiService, public dataservice: Dataservice) {//Bereitstellen von ActivatedRoute für navigation, WavesAPIService für REST-Schnittstelle und dataservcie für

  }

  initialiseComponent(): void { //Blockdetails werden aus REST-Schnittstelle bzw. dataService in Komponente geladen
    this.isLoading = true;

    if (this.dataservice.blockHeader == null) {
      this.wavesSevice.getBlockHeader(this.blockHeight) //Blockheader von REST-Schnittstelle abrufen
        .subscribe(blockHeader => this.blockHeader = blockHeader);
    } else {
      this.blockHeader = this.dataservice.blockHeader;
      this.dataservice.blockHeader = null;
    }

    this.wavesSevice.getBlockchainHeight() //aktuelle Blockchainhöhe abrufen
      .subscribe(blockchainHeight => this.maxBlockHeight = blockchainHeight.height);

    this.wavesSevice.getBlock(this.blockHeight).subscribe(block => { //Transaktionen des abzufragenden Blocks in Komponente laden
      this.transactions = block.transactions;
      this.isLoading = false;
    });
  }

  ngOnInit() { //wird erst ausgeführt wenn Komponente vollständig erstellt wurde Blockheight wird aus URL in Komponente geladen
    this.route.params.subscribe(params => {
      this.blockHeight = parseInt(params.blockHeight);
      this.initialiseComponent();
    });
  }
}
