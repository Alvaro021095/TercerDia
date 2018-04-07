import { TestBed, inject } from '@angular/core/testing';

import { ShowGiftService } from './show-gift.service';

describe('ShowGiftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowGiftService]
    });
  });

  it('should be created', inject([ShowGiftService], (service: ShowGiftService) => {
    expect(service).toBeTruthy();
  }));
});
