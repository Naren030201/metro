import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketPolicy } from '../model/ticket-policy';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketpolicyService {

  constructor(private _http:HttpClient) { }

  getTicketPolicies():Observable<TicketPolicy[]>{
    return this._http.get<TicketPolicy[]>("http://localhost:8083/ticket-policies");
  }

  // public addTicketPolicies(addTicketPolicies: TicketPolicy):Observable<TicketPolicy[]>{
  //   return this._http.post<TicketPolicy[]>("http://localhost:8080/ticket-policies",addTicketPolicies);
  // }

  addTicketPolicies(input: TicketPolicy) :  Observable <TicketPolicy[]> {
    const headers = { 'content-type': 'application/json'};
    return this._http.post<TicketPolicy[]>("http://localhost:8083/ticket-policies", JSON.stringify(input), {'headers': headers});
  }

}
