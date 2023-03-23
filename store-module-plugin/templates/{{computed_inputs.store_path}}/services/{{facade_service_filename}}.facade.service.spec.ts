import { TestBed } from '@angular/core/testing';

import { {{ facade_service_classname }} } from './{{ facade_service_filename }}.facade.service';

describe('{{ facade_service_classname }}', () => {
  let service: {{ facade_service_classname }};

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject({{ facade_service_classname }});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
