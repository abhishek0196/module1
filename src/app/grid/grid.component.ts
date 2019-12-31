import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridService } from './grid.service';

import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public toggle = false;
  public msg = "Enabled"
  public pageSize = 1;
  public gridView: GridDataResult;
  public view: Observable<GridDataResult>;
  skip = 0;
  constructor(private route:ActivatedRoute,
  private service:GridService) { }
  data:any;
    ngOnInit()
    {
      this.service.getRequest(0,1).subscribe((response:any)=>{
        this.view = response.items;
        this.data = response.items;
        console.log(this.data)
        this.gridView = {
         data: this.data,
         total: response.totalCount
         };
       
        
       }) 
    }
  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip
    this.service.getRequest(this.skip,event.take).subscribe((response:any)=>{
      
      this.data = response.items;
      this.gridView = {
       data: this.data,
       total: response.totalCount
       };
     
      
     })
    // this.loadItems();
}
public removeHandler({sender,dataItem}) {
    console.log("hello"+dataItem)
    this.toggle = !this.toggle;
    this.msg = this.toggle ? "Enabled": "Disabled"
}
hello()
{
  console.log("hello");
  this.toggle = !this.toggle;
  this.msg = this.toggle ? "Enabled": "Disabled"
}

}
