import { TestBed } from '@angular/core/testing';

import { BardicInsultService } from './bardic-insult.service';

describe('BardicInsultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BardicInsultService = TestBed.get(BardicInsultService);
    expect(service).toBeTruthy();
  });
});
