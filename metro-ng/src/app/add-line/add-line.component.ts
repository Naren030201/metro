import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddLineService } from '../service/add-line.service';
import { Line } from '../model/line';


@Component({
  selector: 'app-add-line',
  templateUrl: './add-line.component.html',
  styleUrls: ['./add-line.component.css']
})
export class AddLineComponent implements OnInit {
  line!: Line;

  constructor(private lineService: AddLineService,private route : Router) { }
 
  ngOnInit(): void {
    this.line = {
      id: 0,
      name:""
    }
      }

  
  onSubmit(){
    console.log("onSubmit");
    let json: string = JSON.stringify(this.line);
    this.lineService.addLine(json).subscribe(
      data =>{
        this.route.navigate(['line'])
      }
    );
  }

}
