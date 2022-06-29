import { Component, OnInit } from '@angular/core';
import { TicketpolicyService } from '../service/ticketpolicy.service';
import { TicketPolicy } from '../model/ticket-policy';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ticket-policy',
  templateUrl: './add-ticket-policy.component.html',
  styleUrls: ['./add-ticket-policy.component.css']
})
export class AddTicketPolicyComponent implements OnInit {

  checkFlag: boolean=false;
  constructor(private service: TicketpolicyService,private router : Router) { }

  addTicketDetails: TicketPolicy={
    id: 0,
    start: 0,
    end: 0,
    price : 0,
  }

  checkDistance(form:any){
    this.checkFlag=false
    if(form.controls.start.value>form.controls.end.value){
      this.checkFlag=true;
    }    
  }


  ngOnInit(): void {
  }

  addTicket(){
    this.service.addTicketPolicies(this.addTicketDetails).subscribe(
      data=>{
        if(data){
          this.router.navigate(["/ticket"])
        }
      }
    )
  }

}
