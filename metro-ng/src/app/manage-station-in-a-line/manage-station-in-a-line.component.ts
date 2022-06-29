import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Line } from '../model/line';
import { LineStation } from '../model/line-station';
import { Station } from '../model/station';
import { LineService } from '../service/line.service';

@Component({
  selector: 'app-manage-station-in-a-line',
  templateUrl: './manage-station-in-a-line.component.html',
  styleUrls: ['./manage-station-in-a-line.component.css']
})
export class ManageStationInALineComponent implements OnInit {

  linestations!:LineStation[];
  lineId!: number;
  lineName!:string;
  line!: Line;
  sequence!:number;
  
  constructor(private route: ActivatedRoute, private service:LineService) { } 


  ngOnInit(): void {
    let id : any = this.route.snapshot.paramMap.get("lineId");
    this.service.getLine(id).subscribe(
      data => {
        this.line=data;
        console.log(this.line);
      }
    );

    this.service.getStations(id).subscribe(
      data=> {
        console.log(data);
        this.linestations=data;
        let size:number=this.linestations.length;
        this.sequence=this.linestations[size-1].sequence+1;

        
      }
    )
    
    
    
  };


}
