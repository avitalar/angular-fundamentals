import { TestBed } from '@angular/core/testing';

import { AvitalserviceService } from './avitalservice.service';

describe('AvitalserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvitalserviceService = TestBed.get(AvitalserviceService);
    expect(service).toBeTruthy();
  });
});
