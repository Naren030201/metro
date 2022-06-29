import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPricingComponent } from './ticket-pricing.component';

describe('TicketPricingComponent', () => {
  let component: TicketPricingComponent;
  let fixture: ComponentFixture<TicketPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
