import { Component, OnInit } from '@angular/core';
import {UltimakerService} from "../../services/ultimaker-service";
import {Printer} from "../../shared/Printer";
import {BedTemp} from "../../shared/BedTemp";
import {Bed} from "../../shared/Bed";


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  printer: Printer;

  constructor(private ultimakerService: UltimakerService) {
    this.printer=new Printer();
    this.printer.bed=new Bed();
    this.printer.bed.temperature=new BedTemp();

    ultimakerService.getPrinterStatus().subscribe(printerStatus => { //Auslesen und speichern des Namens des Druckers
      this.printer=printerStatus;
    });
  }

  ngOnInit() {
  }

}
