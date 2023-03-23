import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { {{service_classname}} } from '../services/service/{{service_filename}}.service';
import * as actions from './{{entity_store_filename}}.actions';
import { State } from './{{entity_store_filename}}.reducer';

@Injectable()
export class {{effects_name}} {
    {{facade_service_get_list}}$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.{{evt_get_list | pascalcase}}),
            mergeMap(() => this.{{service_instance}}.{{service_get_list}}().pipe(
                map({{entity_store_camelcase_list}} => actions.{{evt_get_list_success | pascalcase}}({ {{entity_store_camelcase_list}} })),
                catchError(({ message }) => of(actions.{{evt_get_list_failure | pascalcase}}({ failure: { message } })))
            ))
        )
    );

    {{facade_service_get_item}}$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.{{evt_get_item | pascalcase}}),
            mergeMap((payload: any) => this.{{service_instance}}.{{service_get_item}}(payload.id).pipe(
                map({{entity_store_camelcase}} => actions.{{evt_get_item_success | pascalcase}}({{entity_store_camelcase}})),
                catchError(({ message }) => of(actions.{{evt_get_item_failure | pascalcase}}({ failure: { message } })))
            ))
        )
    );

    {{facade_service_save_item}}$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.{{evt_post_item | pascalcase}}),
            mergeMap((payload: any) => this.{{service_instance}}.{{service_save_item}}(payload.{{entity_store_camelcase}}).pipe(
                map({{entity_store_camelcase}} => (actions.{{evt_post_item_success | pascalcase}}({ {{entity_store_camelcase}} }))),
                catchError(({ message }) => of(actions.{{evt_post_item_failure | pascalcase}}({ failure: { message } })))
            ))
        )
    );

    {{facade_service_edit_item}}$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.{{evt_put_item | pascalcase}}),
            mergeMap((payload: any) => this.{{service_instance}}.{{service_edit_item}}(payload.{{entity_store_camelcase}}).pipe(
                map({{entity_store_camelcase}} => ( actions.{{evt_put_item_success | pascalcase}}({ {{entity_store_camelcase}} }))),
                catchError(({ message }) => of(actions.{{evt_put_item_failure | pascalcase}}({ failure: { message } })))
            ))
        )
    );

    {{facade_service_remove_item}}$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.{{evt_delete_item | pascalcase}}),
            mergeMap((payload: any) => this.{{service_instance}}.{{service_remove_item}}(payload.id).pipe(
                map({{entity_store_camelcase}} => ( actions.{{evt_delete_item_success | pascalcase}}() )),
                catchError(({ message }) => of(actions.{{evt_delete_item_failure | pascalcase}}({ failure: { message } })))
            ))
        )
    );

    constructor(
        private actions$: Actions,
        private {{service_instance}}: {{service_classname}},
        readonly store: Store<State>
    ) { }
}