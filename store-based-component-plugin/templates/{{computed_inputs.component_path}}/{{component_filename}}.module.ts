import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { {{component_classname}} } from './{{component_filename}}.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { {{effects_name}} } from './store/{{entity_store_filename}}.effects';
import { {{reducer_name}} } from './store/{{entity_store_filename}}.reducer';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    {{component_classname}}
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('{{feature_selector_name}}', {{reducer_name}}),
    EffectsModule.forFeature([{{effects_name}}])
  ],
  exports: [
    {{component_classname}}
  ]
})
export class {{module_name}} { }
