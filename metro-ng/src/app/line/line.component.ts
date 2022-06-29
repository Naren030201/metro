import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Line } from '../model/line';
import { LineService } from '../service/line.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  result!:Line[];

  constructor(private route: ActivatedRoute, private service:LineService) { }

  ngOnInit(): void {
    this.service.viewLine().subscribe(
      data=> {
        console.log(data);
        this.result=data;
      }
    )
  }

}
