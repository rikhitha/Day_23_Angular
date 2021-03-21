import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../model/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid:String="";
  password:String="";

  auth!:Auth;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  handlelogin()
  {
    let auth={
      userid:this.userid,
      password:this.password,
      ts:new Date()

    };
    sessionStorage.setItem("auth",JSON.stringify(auth));
    
      this.route.navigate(['searchpage']);
      console.log(auth);
    
    }
   

}
