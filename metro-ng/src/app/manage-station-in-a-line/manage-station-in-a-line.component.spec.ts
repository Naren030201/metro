import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStationInALineComponent } from './manage-station-in-a-line.component';

describe('ManageStationInALineComponent', () => {
  let component: ManageStationInALineComponent;
  let fixture: ComponentFixture<ManageStationInALineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageStationInALineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStationInALineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
