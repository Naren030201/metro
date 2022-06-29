import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) {

   }

   public remoteaccess(user:User):Observable<any>{
     return this.http.post<any>("http://localhost:8081/login",user);
   }
   public registerdetails(user:User):Observable<any>{
     return this.http.post<any>("http://localhost:8081/register",user);
   }
  // public help(user:User):Observable<any>{
  //   return this.http.post<any>("http://localhost:8080/answer",user);
  // }
  public  changePassword(user:User):Observable<any>{
    return this.http.put<any>("http://localhost:8081/changepassword",user);
  }


}
