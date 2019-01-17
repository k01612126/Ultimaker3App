import { Component, OnInit } from '@angular/core';
import {UltimakerService} from "../../services/ultimaker-service";
import {AuthResponse} from "../../shared/AuthResponse";
import {Message} from "../../shared/Message";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  authResponse= new AuthResponse();
  application: string="Ultimaker3 App";
  user: string="Flanjenny";
  authorization= new Message();
  verification= new Message();
  blinkMessage  = new Message();

  constructor(private ultimakerService: UltimakerService) {

  }

  ngOnInit() {
  }

  reqAuth() {
    this.ultimakerService.requestAuthentication(this.application, this.user).subscribe(response => {
      this.authResponse=response;
    });
  }

  checkAcception() {
    this.ultimakerService.checkAcception(this.authResponse.id).subscribe(response => {
      this.authorization=response;
    });

  }

  verifyAuth() {
    this.ultimakerService.verifyAuthentication().subscribe(response => {
      this.verification=response;
    });
  }

  letitblink() {
    this.ultimakerService.letItBlink().subscribe(response => {
      this.blinkMessage = response;
    })
  }
}
