import { Component, OnInit } from '@angular/core';
import {UltimakerService} from "../../services/ultimaker-service";
import {Printer} from "../../shared/Printer";


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  printer: Printer;

  constructor(private ultimakerService: UltimakerService) {
    ultimakerService.getPrinterStatus().subscribe(printerStatus => { //Auslesen und speichern des Namens des Druckers
      this.printer=printerStatus;
    });
  }

  ngOnInit() {
  }

}
