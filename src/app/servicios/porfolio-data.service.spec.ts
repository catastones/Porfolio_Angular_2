import { TestBed } from '@angular/core/testing';

import { PorfolioDataService } from './porfolio-data.service';

describe('PorfolioDataService', () => {
  let service: PorfolioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorfolioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
