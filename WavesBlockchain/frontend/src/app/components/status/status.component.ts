import { Component, OnInit } from '@angular/core';
import {UltimakerService} from "../../services/ultimaker-service";


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  printerName: string;

  constructor(private ultimakerService: UltimakerService) {
    ultimakerService.getPrinterName().subscribe(printerName => { //Auslesen und speichern des Namens des Druckers
      this.printerName=printerName.toString();
    });
  }

  ngOnInit() {
  }

}
