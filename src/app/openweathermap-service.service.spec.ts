import { TestBed } from '@angular/core/testing';

import { OpenweathermapServiceService } from './openweathermap-service.service';

describe('OpenweathermapServiceService', () => {
  let service: OpenweathermapServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenweathermapServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
