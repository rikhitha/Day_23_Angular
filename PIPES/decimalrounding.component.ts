import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decimalrounding',
  templateUrl: './decimalrounding.component.html',
  styleUrls: ['./decimalrounding.component.css']
})
export class DecimalroundingComponent implements OnInit {
  value!:number;

  constructor() { }

  ngOnInit(): void {
  }

}
