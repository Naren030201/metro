import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTicketPolicyComponent } from './add-ticket-policy.component';

describe('AddTicketPolicyComponent', () => {
  let component: AddTicketPolicyComponent;
  let fixture: ComponentFixture<AddTicketPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTicketPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTicketPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
