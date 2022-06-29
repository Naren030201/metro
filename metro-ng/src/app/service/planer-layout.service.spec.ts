import { TestBed } from '@angular/core/testing';

import { PlanerLayoutService } from './planer-layout.service';

describe('PlanerLayoutService', () => {
  let service: PlanerLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanerLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
