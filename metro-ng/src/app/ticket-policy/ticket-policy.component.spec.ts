import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPolicyComponent } from './ticket-policy.component';

describe('TicketPolicyComponent', () => {
  let component: TicketPolicyComponent;
  let fixture: ComponentFixture<TicketPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
