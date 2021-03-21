import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { LoginComponent } from './components/login/login.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';

const routes: Routes = [
  {path:'searchpage',component:SearchpageComponent},
  {path:'login',component:LoginComponent},
  {path:'display',component:DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
