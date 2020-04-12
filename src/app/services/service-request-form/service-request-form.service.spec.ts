import { TestBed } from '@angular/core/testing';

import { ServiceRequestFormService } from './service-request-form.service';

describe('ServiceRequestFormService', () => {
  let service: ServiceRequestFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRequestFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
