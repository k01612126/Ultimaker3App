import { Component, OnInit } from '@angular/core';
import {UltimakerService} from "../../services/ultimaker-service";
import {Message} from "../../shared/Message";

@Component({
  selector: 'app-printer-identification',
  templateUrl: './printer-identification.component.html',
  styleUrls: ['./printer-identification.component.css']
})
export class PrinterIdentificationComponent implements OnInit {
  blinkMessage  = new Message();


  constructor(private ultimakerService: UltimakerService) { }

  ngOnInit() {
  }

  letitblink() {
    this.ultimakerService.letItBlink().subscribe(response => {
      this.blinkMessage = response;
    })
  }
}
