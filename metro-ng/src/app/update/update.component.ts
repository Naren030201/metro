import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../service/user';
import { RegisterService } from '../service/register.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  msg="";
  user: User={
    id: this.userService.user.id,
    name:this.userService.user.name,
    emailId:this.userService.user.emailId,
    password:"",
    role:this.userService.user.role
  }


  constructor(private service:RegisterService,private userService:UserService,private route:Router) { }
  

  
  ngOnInit(): void {
  }

  pass(){
    this.service.changePassword(this.user).subscribe(
      data=>{
        console.log("success");
        this.route.navigate(["/loginsucess"]);
      },
      error=>{
        console.log("failed");
      }
    );

  }



}
