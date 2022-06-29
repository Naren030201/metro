import { TestBed } from '@angular/core/testing';

import { TicketpolicyService } from './ticketpolicy.service';

describe('TicketpolicyService', () => {
  let service: TicketpolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketpolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
