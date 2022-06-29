import { TestBed } from '@angular/core/testing';

import { AddLineService } from './add-line.service';

describe('AddLineService', () => {
  let service: AddLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
