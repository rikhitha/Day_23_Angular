import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Displayinterface } from '../model/displayinterface';

@Injectable({
  providedIn: 'root'
})
export class DisplayserviceService {

  customerdeturl="http://localhost:3000/customerdet";


  constructor(private http:HttpClient) { }

  public getcustomerdet():Observable<Displayinterface[]>
  {
    return this.http.get<Displayinterface[]>(this.customerdeturl);
  }
}
