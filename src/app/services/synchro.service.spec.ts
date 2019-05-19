import { TestBed } from '@angular/core/testing';

import { SynchroService } from './synchro.service';

describe('SynchroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SynchroService = TestBed.get(SynchroService);
    expect(service).toBeTruthy();
  });
});
