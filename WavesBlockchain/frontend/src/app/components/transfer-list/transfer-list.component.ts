import {Component, OnInit, Input} from '@angular/core';
import {Transfer} from "../../shared/Transfer";

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.css']
})
export class TransferListComponent implements OnInit {
  @Input() data: Transfer[];

  constructor() {

  }

  ngOnInit() {
    console.log(this.data.length);
  }
}
