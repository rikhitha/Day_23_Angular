import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AadharmaskingComponent } from './component/aadharmasking/aadharmasking.component';
import { AgecalculationComponent } from './component/agecalculation/agecalculation.component';
import { CreditcardComponent } from './component/creditcard/creditcard.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DecimalroundingComponent } from './component/decimalrounding/decimalrounding.component';
import { ForexComponent } from './component/forex/forex.component';
import { LoginComponent } from './component/login/login.component';
import { SsnmaskingComponent } from './component/ssnmasking/ssnmasking.component';
import { TelephonenumberComponent } from './component/telephonenumber/telephonenumber.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'aadhar',component:AadharmaskingComponent},
  {path:'age',component:AgecalculationComponent},
  {path:'creditcard',component:CreditcardComponent },
  {path:'decimal',component:DecimalroundingComponent},
  {path:'forex',component:ForexComponent},
  {path:'ssn',component:SsnmaskingComponent},
  {path:'telephone',component:TelephonenumberComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
