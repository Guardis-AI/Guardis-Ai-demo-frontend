import { TestBed } from '@angular/core/testing';

import { ViewnotificationResolver } from './viewnotification.resolver';

describe('ViewnotificationResolver', () => {
  let resolver: ViewnotificationResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ViewnotificationResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
