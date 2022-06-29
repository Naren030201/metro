import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../model/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketHistoryService {

  constructor(private _http:HttpClient) 
  { }
public getTicketHistory(userId:number):Observable<Ticket[]>
{
  return this._http.get<Ticket[]>("http://localhost:8082/tickets/"+userId)
}
}
