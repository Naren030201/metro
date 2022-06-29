import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Station } from '../model/station';

@Injectable({
  providedIn: 'root'
})
export class AddStationService {

  constructor(private http:HttpClient) { 

  }
  
    addStation(input: Station) :  Observable <Station[]> {
      const headers = { 'content-type': 'application/json'};
      return this.http.post<Station[]>("http://localhost:8080/stations", JSON.stringify(input), {'headers': headers});
    }
    
   }
  


