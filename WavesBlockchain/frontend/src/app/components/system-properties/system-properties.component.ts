import { Component, OnInit } from '@angular/core';
import {UltimakerService} from "../../services/ultimaker-service";
import {SystemProperties} from "../../shared/SystemProperties";

@Component({
  selector: 'app-system-properties',
  templateUrl: './system-properties.component.html',
  styleUrls: ['./system-properties.component.css']
})
export class SystemPropertiesComponent implements OnInit {
  systemProperties= new SystemProperties();

  constructor(private ultimakerService: UltimakerService) {
    ultimakerService.getSystemProperties().subscribe(systemProperties => { //Auslesen und speichern des Namens des Druckers
      this.systemProperties=systemProperties;
    });
  }

  ngOnInit() {
  }

}
