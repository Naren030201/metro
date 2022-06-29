import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Station } from '../model/station';


@Injectable({
  providedIn: 'root'
})
export class StationService {
  baseUrl:string="http://localhost:8080";
  api:string="/stations";
  stationUrl: string="http://localhost:8080/stations/";

  constructor(private http: HttpClient) { }

  public viewStations():Observable<Station[]>{
    return this.http.get<Station[]>(this.stationUrl+"station");
  }

  getStation(stationId : number):Observable<Station>{
    return this.http.get<Station>(this.baseUrl+this.api+"/"+stationId);
    
  }

  modifyStation(station: string): Observable<any> {
    console.log(station);
    let header: HttpHeaders = new HttpHeaders();
    header =header.set('Content-Type', 'application/json');
    return this.http.put<any>(
      this.baseUrl + this.api,
      station,
      {headers: header}
    );
   }
  
   

}