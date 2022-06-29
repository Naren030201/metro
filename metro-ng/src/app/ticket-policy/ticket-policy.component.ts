import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketPolicy } from '../model/ticket-policy';
import { TicketpolicyService } from '../service/ticketpolicy.service';

@Component({
  selector: 'app-ticket-policy',
  templateUrl: './ticket-policy.component.html',
  styleUrls: ['./ticket-policy.component.css']
})
export class TicketPolicyComponent implements OnInit {

  constructor(private service: TicketpolicyService) { }

  ticketPolicies!: TicketPolicy[];
  

  ngOnInit(): void {
    this.service.getTicketPolicies().subscribe(
      data=>{
        this.ticketPolicies = data;
      }
    );
  }
  

}
