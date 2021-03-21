import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Displayinterface } from '../../model/displayinterface';
import { DisplayserviceService } from '../../services/displayservice.service';

function ageValidator(min: number, max: number) {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (
      control.value !== null &&
      (isNaN(control.value) || control.value < min || control.value > max)
    ) {
      return { ageValidator: true };
    }
    return null;
  };
}


@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  registerForm!: FormGroup;
    submitted = false;
   countrylist:any=['India','Japan','China'];
   display!:Displayinterface[];
  constructor(private formBuilder: FormBuilder,private route:Router,private displayserv:DisplayserviceService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      age: [null, ageValidator(20,40 )],
      country:['',Validators.required],
      city:['']
  });
  
  
  }
 
  get f() { return this.registerForm.controls; }
  

  onSubmit(val:any) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.displayserv.getcustomerdet().pipe(
      map(data=>data.filter(d=>d.customerid==val))
    ).subscribe(( display)=>{
      this.display=display;
    });
    console.log(val);
     
    
    
}

}
