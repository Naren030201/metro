import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Station } from '../model/station';
import { StationService } from '../service/station.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  stations!:Station[];
  id!:number;
  name!:string;
  result!:Station[];

  constructor(private route: ActivatedRoute, private service:StationService) { }

  ngOnInit(): void {
    this.service.viewStations().subscribe(
      data=> {
        console.log(data);
        this.result=data;
      }
    )
  }

}
