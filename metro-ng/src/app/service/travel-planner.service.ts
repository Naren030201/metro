import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Station } from '../model/station';

@Injectable({
  providedIn: 'root'
})
export class TravelPlannerService {

  constructor(private _http:HttpClient) { }

  public getTravelPlanner(name : string):Observable<Station[]>{
    return this._http.get<Station[]>("http://localhost:8080/stations?stationName="+name)
  }

  public getPlannerlayout(startid: number, endid: number):Observable<any>{
    return this._http.get<any>("http://localhost:8080/line-stations/"+startid+"/"+endid);
  }
}
