import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Line } from'../model/line';

@Injectable({
  providedIn: 'root'
})
export class AddLineService {

  constructor(private http:HttpClient) { 

  }
  baseUrl:string="http://localhost:8080";
  api:string="/lines";

  addLine(line: string): Observable<any>{
    let header : HttpHeaders = new HttpHeaders();
    header = header.set('Content-Type', 'application/json');
    return this.http.post<any>(
      this.baseUrl + this.api,
      line,
      { headers:header }
    );
  }
    
    //public addline(): Observable<Line[]> {
       // return this._http.post("http://localhost:8080/line");
      //}
   }
  


