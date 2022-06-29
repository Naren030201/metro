import { TestBed } from '@angular/core/testing';

import { TravelPlannerService } from './travel-planner.service';

describe('TravelPlannerService', () => {
  let service: TravelPlannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelPlannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
