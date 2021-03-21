import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telephonenumber',
  templateUrl: './telephonenumber.component.html',
  styleUrls: ['./telephonenumber.component.css']
})
export class TelephonenumberComponent implements OnInit {

countryselect:String="INDIA";
num!:number;
h!:boolean;

  select(event:any)
  {
     this.countryselect=event.target.value;
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
