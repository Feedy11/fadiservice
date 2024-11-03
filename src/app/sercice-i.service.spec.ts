import { TestBed } from '@angular/core/testing';

import { SerciceIService } from './sercice-i.service';

describe('SerciceIService', () => {
  let service: SerciceIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerciceIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
