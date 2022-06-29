import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveLineFromStationComponent } from './remove-line-from-station.component';

describe('RemoveLineFromStationComponent', () => {
  let component: RemoveLineFromStationComponent;
  let fixture: ComponentFixture<RemoveLineFromStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveLineFromStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveLineFromStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
