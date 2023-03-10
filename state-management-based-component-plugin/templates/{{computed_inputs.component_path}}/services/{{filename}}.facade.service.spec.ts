import { TestBed } from '@angular/core/testing';

import { {{ facade_service_pascal }} } from './{{ filename }}.facade.service';

describe('{{ facade_service_pascal }}', () => {
  let service: {{ facade_service_pascal }};

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject({{ facade_service_pascal }});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
