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
  application: string="Application";
  user: string="User";
  authorization= new Message();
  verification= new Message();

  constructor(private ultimakerService: UltimakerService) {
  this.authResponse.id = "-";
  this.authResponse.key = "-";
  this.authorization.message = "-";
  this.verification.message ="-";
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


}
