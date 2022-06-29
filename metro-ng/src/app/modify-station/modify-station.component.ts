import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Station } from '../model/station';
import { StationService } from '../service/station.service';

@Component({
  selector: 'app-modify-station',
  templateUrl: './modify-station.component.html',
  styleUrls: ['./modify-station.component.css']
})
export class ModifyStationComponent implements OnInit {
  
  getStation!: Station;
  success:boolean=false;
  stationService: any;
  createResponse: any; 
  
  constructor(private route : ActivatedRoute,private service:StationService) { }
  
  getStationName (){
    
  };
  ngOnInit(): void {
    let stationId: any = this.route.snapshot.paramMap.get('stationId');
    console.log(stationId);
    this.service.getStation(stationId).subscribe(
      data=>{
        this.getStation=data;
      }
    )
  }
  onSubmit(){
    console.log("onSubmit");
    let json :string= JSON.stringify(this.getStation);
    this.service.modifyStation(json).subscribe(
      ()=>{
        this.success=true;
      }
    );
  }

}
