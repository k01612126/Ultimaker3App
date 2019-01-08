import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WavesApiService} from "../../services/waves-api-service";
import {AddressBalance} from "../../shared/AddressBalance";
import {Transaction} from "../../shared/Transaction";

@Component({
  selector: 'app-address-details',
  templateUrl: 'address-details.component.html',
  styleUrls: ['address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {

  addressValue: string;
  addressBalance: AddressBalance;

  transactions: Transaction[];
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private wavesSevice: WavesApiService) { //Bereitstellen von ActivatedRoute für navigation und waves Service für REST-Schnittstelle

  }


  initialiseComponent(): void { //Adressdetails werden über WavesService in Komponente geladen
    this.isLoading = true;

    this.wavesSevice.getAddressBalance(this.addressValue)
      .subscribe(balance => this.addressBalance = balance);

    this.wavesSevice.getTransactions(this.addressValue, 100)
      .subscribe(transactions => {
        this.transactions = transactions[0];
        this.isLoading = false;
      });
  }

  ngOnInit() { //wird erst ausgeführt wenn Komponente vollständig erstellt wurde
    this.route.params.subscribe(params => {
      this.addressValue = params.addressValue;
      this.initialiseComponent();
    });
  }
}
