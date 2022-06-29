import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../service/register.service';
import { User } from '../service/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user =new User();
  msg="";
  from:any=''
  to:any=''

  constructor(private service:RegisterService, private route:Router,
    private activatedRoute:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.paramMap.get('from'));
    this.from =this.activatedRoute.snapshot.paramMap.get('from');
    this.from =this.activatedRoute.snapshot.paramMap.get('to');
  }
   loginuser(){
      this.service.remoteaccess(this.user).subscribe(
        data=>{
          console.log("response received");
          this.userService.setUser(data);
          if(this.userService.user.role=="admin"){
           this.route.navigate(['/line']);
  
          }
          if(this.userService.user.role=="user"){
           this.route.navigate(['planner']);
          }
        },
        error=>{
          console.log("exception");
          this.msg="Invalid Email or Password";
        }
      )
   }

}
