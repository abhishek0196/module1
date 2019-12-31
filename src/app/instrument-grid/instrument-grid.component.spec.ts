import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentGridComponent } from './instrument-grid.component';

describe('InstrumentGridComponent', () => {
  let component: InstrumentGridComponent;
  let fixture: ComponentFixture<InstrumentGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
