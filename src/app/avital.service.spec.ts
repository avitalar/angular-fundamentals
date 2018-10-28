import { TestBed } from '@angular/core/testing';

import { AvitalService } from './avital.service';

describe('AvitalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvitalService = TestBed.get(AvitalService);
    expect(service).toBeTruthy();
  });
});
