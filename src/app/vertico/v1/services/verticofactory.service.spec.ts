import { TestBed, inject } from '@angular/core/testing';

import { VerticofactoryService } from './verticofactory.service';

describe('VerticofactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerticofactoryService]
    });
  });

  it('should ...', inject([VerticofactoryService], (service: VerticofactoryService) => {
    expect(service).toBeTruthy();
  }));
});
