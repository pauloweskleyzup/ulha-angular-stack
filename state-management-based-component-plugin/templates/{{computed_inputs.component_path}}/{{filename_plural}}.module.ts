import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { {{ component_name }} } from './{{ filename_plural }}.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { {{ effects_name }} } from './store/{{ filename }}.effects';
import { {{ reducer_name }} } from './store/{{ filename }}.reducer';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    {{ component_name }}
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('{{ feature_selector_name }}', {{ reducer_name }}),
    EffectsModule.forFeature([{{ effects_name }}])
  ],
  exports: [
    {{ component_name }}
  ]
})
export class {{ module_name }} { }
