import { TestBed } from '@angular/core/testing';

import { {{ service_pascal }} } from './{{ filename }}.service';

describe('{{ service_pascal }}', () => {
  let service: {{ service_pascal }};

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject({{ service_pascal }});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
