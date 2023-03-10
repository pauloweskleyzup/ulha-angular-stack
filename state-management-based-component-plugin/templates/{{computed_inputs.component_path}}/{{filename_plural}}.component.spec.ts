import { ComponentFixture, TestBed } from '@angular/core/testing';

import { {{ component_name }} } from './{{ filename }}.component';

describe('{{ component_name }}', () => {
  let component: {{ component_name }};
  let fixture: ComponentFixture<{{ component_name }}>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ {{ component_name }} ]
    })
    .compileComponents();

    fixture = TestBed.createComponent({{ component_name }});
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
