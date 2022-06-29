import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { User } from '../service/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = new User();
  msg="";
  ms=""


  constructor(private service:RegisterService,private route:Router) { 
  }

  ngOnInit(): void {
  }
  register(){
    this.service.registerdetails(this.user).subscribe(
      data=>{
        console.log("registerd");
        this.ms="You' Have Successfully Registered  Try to Login";
        this.route.navigate(['/login/signup'])
      },
      error=>{
        console.log("failed");
        this.msg="Email is Already Registered";
      }
    );  

    }

}
