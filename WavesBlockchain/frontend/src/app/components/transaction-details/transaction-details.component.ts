import {Component} from '@angular/core';
import {Transaction} from "../../shared/Transaction";
import {ActivatedRoute} from "@angular/router";
import {WavesApiService} from "../../services/waves-api-service";
import {Asset} from "../../shared/Asset";

@Component({
  selector: 'app-transaction-details',
  templateUrl: 'transaction-details.component.html',
  styleUrls: ['transaction-details.component.css']
})
export class TransactionDetailsComponent {

  transaction: Transaction;
  transactionId: string;
  asset: Asset;
  isloading: boolean;

  constructor(private route: ActivatedRoute, private wavesSevice: WavesApiService) { //ActivatedRoute um Werte aus URL abzurufen, wavesService um Auf REST-Schnittstelle zuzugreifen.
    this.isloading = true;
    route.params.subscribe(params => this.transactionId = params.transactionId); //Auslesen der TransaktionsID aus URL

    this.wavesSevice.getTransactionInfo(this.transactionId) //Speichern der Transaction, welche über WavesService aus API ausgelesen wird.
      .subscribe(transaction => {

        this.transaction = transaction;

        if (this.transaction.assetId != null) {
          this.wavesSevice.getAssetDetail(this.transaction.assetId)//Speichern des AssetNamens des in der Transaktion verwendeten Assets
            .subscribe(asset => this.asset = asset);
        } else {
          this.asset = new Asset("WAVES"); //Das WAVES Asset hat keine AssetID
        }
        this.isloading = false;
      });
  }
}
