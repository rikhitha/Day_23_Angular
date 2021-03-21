import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agecalculation',
  templateUrl: './agecalculation.component.html',
  styleUrls: ['./agecalculation.component.css']
})
export class AgecalculationComponent implements OnInit {
  birth:Date=new Date("1998-12-25");

  constructor() { }

  ngOnInit(): void {
  }

}
