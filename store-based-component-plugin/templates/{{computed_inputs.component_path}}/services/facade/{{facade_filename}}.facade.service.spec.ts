import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { {{facade_service_classname}} } from './{{facade_filename}}.facade.service';

describe('{{facade_service_classname}}', () => {
  let service: {{facade_service_classname}};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({})]
    });
    service = TestBed.inject({{facade_service_classname}});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
