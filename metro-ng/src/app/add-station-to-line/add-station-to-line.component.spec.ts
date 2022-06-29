import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStationToLineComponent } from './add-station-to-line.component';

describe('AddStationToLineComponent', () => {
  let component: AddStationToLineComponent;
  let fixture: ComponentFixture<AddStationToLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStationToLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStationToLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
