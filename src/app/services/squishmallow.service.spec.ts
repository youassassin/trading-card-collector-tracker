import { TestBed } from '@angular/core/testing';

import { SquishmallowService } from './squishmallow.service';

describe('SquishmallowService', () => {
  let service: SquishmallowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquishmallowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
