import { TestBed } from '@angular/core/testing';

import { Serv } from './services.service';

describe('ServicesService', () => {
  let service: Serv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
