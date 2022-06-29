import { TestBed } from '@angular/core/testing';

import { TicketHistoryService } from './ticket-history.service';

describe('TicketHistoryService', () => {
  let service: TicketHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
