import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { {{component_classname}} } from './{{component_filename}}.component';

describe('{{component_classname}}', () => {
  let component: {{component_classname}};
  let fixture: ComponentFixture<{{component_classname}}>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ {{component_classname}} ],
      imports: [StoreModule.forRoot(provideMockStore)],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent({{component_classname}});
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
