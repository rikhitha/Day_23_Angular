import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit {
  value:number=234;
  inr:String="INR";
  usd:String="USD";
  eur:String="EUR";
  

  constructor() { }

  ngOnInit(): void {
  }

}
