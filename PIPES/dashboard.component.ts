import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router) { }
  forex()
  {
    this.route.navigate(['forex']);
  }
  telephone()
  {
    this.route.navigate(['telephone']);

  }
  age()
  {
    this.route.navigate(['age']);

  }
  decimal()
  {
    this.route.navigate(['decimal']);

  }
  creditcard()
  {
    this.route.navigate(['creditcard']);
  }
  ssn()
  {
    this.route.navigate(['ssn']);

  }
  aadhar()
  {
    this.route.navigate(['aadhar']);

  }

  ngOnInit(): void {
  }

}
