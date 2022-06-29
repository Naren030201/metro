import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LineStation } from '../model/line-station';
import { Line } from '../model/line';
import { Station } from '../model/station';

@Injectable({
  providedIn: 'root'
})
export class LineService {

  lineUrl: string="http://localhost:8080/lines";
  lineStationUrl: string="http://localhost:8080/line-stations/";
  stationUrl: string="http://localhost:8080/lines/";
  

  constructor(private http:HttpClient) { }

  public viewLine():Observable<Line[]>{
    return this.http.get<Line[]>(this.stationUrl+"line");
  }

  getStations(lineId:number):Observable<LineStation[]>{
    console.log("Service - before calling get.");
    let observable:Observable<LineStation[]> = this.http.get<LineStation[]>(this.lineStationUrl+"lines/"+lineId);
    console.log("Service - after calling get.");
    return observable;
  }

  getLine(lineId:number):Observable<Line>{
    return this.http.get<Line>(this.lineUrl + "/" + lineId);
  }

  public getStation(name : string):Observable<Station[]>{
    return this.http.get<Station[]>("http://localhost:8080/stations?stationName="+name)
  }

  getLineStation(lineStationId:number):Observable<LineStation>{
    return this.http.get<LineStation>(this.lineStationUrl + lineStationId);
  }

  insertStation(lineStation:String): Observable<any>{
    let header : HttpHeaders = new HttpHeaders();
    header = header.set('Content-Type','application/json');
    return this.http.post<any>(
      this.lineStationUrl,
      lineStation,
      {headers:header}
    );
  }

  addEndStation(lineStation:String): Observable<any>{
    let header : HttpHeaders = new HttpHeaders();
    header = header.set('Content-Type','application/json');
    return this.http.post<any>(
      this.lineStationUrl+"end",
      lineStation,
      {headers:header}
    );
  }
  

}
