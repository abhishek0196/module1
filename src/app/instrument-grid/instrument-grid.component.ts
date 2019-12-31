import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../instrumentGrid/instrument.service';

@Component({
  selector: 'app-instrument-grid',
  templateUrl: './instrument-grid.component.html',
  styleUrls: ['./instrument-grid.component.scss']
})
export class InstrumentGridComponent implements OnInit {

  constructor(private service:InstrumentService) { }

  ngOnInit() {
    this.service.getRequest(0,1);
  }

}
