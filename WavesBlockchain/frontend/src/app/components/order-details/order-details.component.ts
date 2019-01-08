import {Component, Input} from '@angular/core';
import {Order} from "../../shared/Order";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  @Input() data: Order;
  @Input() name: String;

  constructor() {
  }

}
