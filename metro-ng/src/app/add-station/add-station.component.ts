import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Station} from '../model/station';
import { AddStationService } from '../service/add-station.service';



@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {
  station!: Station;
  success:boolean=false;
  stationService: any;
  constructor(private service:AddStationService, private route : Router) { }
 
  ngOnInit(): void {
    this.station = {
      id: 0,
      name:""
    }
      }

  onSubmit(){
    this.service.addStation(this.station).subscribe(
      data=>{
        if(data){
          this.route.navigate(["/add-station"])
        }
      }
    )
  }

}
