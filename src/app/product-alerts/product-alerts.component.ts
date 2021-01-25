import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSms } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  faSms = faSms;
  @Input() product;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
