import { TestBed } from '@angular/core/testing';

import { LikeImageService } from './like-image.service';

describe('LikeImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LikeImageService = TestBed.get(LikeImageService);
    expect(service).toBeTruthy();
  });
});
