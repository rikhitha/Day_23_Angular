import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForexComponent } from './component/forex/forex.component';
import { TelephonenumberComponent } from './component/telephonenumber/telephonenumber.component';
import { AgecalculationComponent } from './component/agecalculation/agecalculation.component';
import { DecimalroundingComponent } from './component/decimalrounding/decimalrounding.component';
import { CreditcardComponent } from './component/creditcard/creditcard.component';
import { SsnmaskingComponent } from './component/ssnmasking/ssnmasking.component';
import { AadharmaskingComponent } from './component/aadharmasking/aadharmasking.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { ForexpipePipe } from './pipe/forexpipe.pipe';
import { TelephonepipePipe } from './pipe/telephonepipe.pipe';
import { AgepipePipe } from './pipe/agepipe.pipe';
import { DecimalroundingpipePipe } from './pipe/decimalroundingpipe.pipe';
import { SsnpipePipe } from './pipe/ssnpipe.pipe';
import { AadharpipePipe } from './pipe/aadharpipe.pipe';
import { FormsModule } from '@angular/forms';
import { CreitmaskingPipe } from './pipe/creitmasking.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ForexComponent,
    TelephonenumberComponent,
    AgecalculationComponent,
    DecimalroundingComponent,
    CreditcardComponent,
    SsnmaskingComponent,
    AadharmaskingComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    ForexpipePipe,
    TelephonepipePipe,
    AgepipePipe,
    DecimalroundingpipePipe,
    SsnpipePipe,
    AadharpipePipe,
    CreitmaskingPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
