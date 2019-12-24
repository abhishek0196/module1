import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridService } from './grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private service:GridService) { }

  ngOnInit() {
    // this.route.params
    //   .subscribe((data)=>{
    //     console.log("data"+data['custName']);
    //   })
    this.service.getRequest();
  }

}
