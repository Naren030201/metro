import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Station } from '../model/station';

@Injectable({
  providedIn: 'root'
})
export class PlanerLayoutService {

  constructor(private _http:HttpClient) { }

  public getPlannerlayout(startid: number, endid: number):Observable<Station[]>{
    return this._http.get<Station[]>("http://localhost:8080/line-stations/"+startid+"/"+endid);
  }
}
