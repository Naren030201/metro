import { Component, OnInit } from '@angular/core';
import { Ticket } from '../model/ticket';
import { TicketHistoryService } from '../service/ticket-history.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-ticket-history',
  templateUrl: './ticket-history.component.html',
  styleUrls: ['./ticket-history.component.css']
})
export class TicketHistoryComponent implements OnInit {
 userId!:number;
 to:string="";
 tickets!:Ticket[];
 lastTicket!:Ticket;


  constructor(private service:TicketHistoryService, private userService: UserService) { }

  ngOnInit(): void {
    this.service.getTicketHistory(this.userService.user.id).subscribe(
      data=>
      {
        this.tickets=data;
      this.lastTicket=data[data.length-1];
      }

        );
    
  }
  getHistory(){
    
    
  }
}
