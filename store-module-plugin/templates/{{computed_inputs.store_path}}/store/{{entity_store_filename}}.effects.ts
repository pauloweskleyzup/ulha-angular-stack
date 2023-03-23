import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import * as actions from "./{{ entity_store_filename }}.actions";
import { State } from "./{{ entity_store_filename }}.reducer";

@Injectable()
export class {{ effects_name }} {
    {{ get_list }}$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.{{ evt_get_list | pascalcase }}),
            /* mergeMap(() => this.yourService.getListMethod().pipe(
                map({{ entity_store_camelcase_list }} => actions.{{ evt_get_list_success | pascalcase }}({ {{ entity_store_camelcase_list }} })),
                catchError(({ message }) => of(actions.{{ evt_get_list_failure | pascalcase }}({ failure: { message } })))
            )
            )*/
        )
    );

    {{ get_item }}$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.{{ evt_get_item | pascalcase }}),
            /* mergeMap((payload) => this.yourService.getItemByIdMethod(payload.id).pipe(
                map({{ entity_store_camelcase }} => actions.{{ evt_get_item_success | pascalcase }}({{ entity_store_camelcase }})),
                catchError(({ message }) => of(actions.{{ evt_get_item_failure | pascalcase }}({ failure: { message } })))
            )
            )*/
        )
    );

    {{ save_item }}$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.{{ evt_post_item | pascalcase }}),
            /* mergeMap((payload) => this.yourService.saveItemMethod(payload.{{ entity_store_camelcase }}).pipe(
                map({{ entity_store_camelcase }} => (actions.{{ evt_post_item_success | pascalcase }}({ {{ entity_store_camelcase }} }))),
                catchError(({ message }) => of(actions.{{ evt_post_item_failure | pascalcase }}({ failure: { message } })))
            )
            )*/
        )
    );

    {{ edit_item }}$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.{{ evt_put_item | pascalcase }}),
            /* mergeMap((payload) => this.youService.editItemMethod(payload.{{ entity_store_camelcase }}).pipe(
                map({{ entity_store_camelcase }} => ( actions.{{ evt_put_item_success | pascalcase }}({ {{ entity_store_camelcase }} }))),
                catchError(({ message }) => of(actions.{{ evt_put_item_failure | pascalcase }}({ failure: { message } })))
            )
            )*/
        )
    );

    {{ remove_item }}$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.{{ evt_delete_item | pascalcase }}),
            /* mergeMap((payload) => this.yourService.removeItemMethod(payload.id).pipe(
                map({{ entity_store_camelcase }} => ( actions.{{ evt_delete_item_success | pascalcase }}() )),
                catchError(({ message }) => of(actions.{{ evt_delete_item_failure | pascalcase }}({ failure: { message } })))
            )
            )*/
        )
    );
    constructor(
        private actions$: Actions,
        readonly store: Store<State>,
        //import your service here
    ) { }
}