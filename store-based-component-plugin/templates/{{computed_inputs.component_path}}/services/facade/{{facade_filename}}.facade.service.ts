import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../../store/{{entity_store_filename}}.reducer';
import * as selectors from '../../store/{{entity_store_filename}}.selectors';
import * as actions from '../../store/{{entity_store_filename}}.actions';

@Injectable({
  providedIn: 'root'
})
export class {{facade_service_classname}} {

  constructor(readonly store: Store<State>) { }

  {{facade_service_get_list}}(fetchFromAPI = false): Observable<any> {
    if(fetchFromAPI) {
      this.store.dispatch(actions.{{evt_get_list | pascalcase}}());
    }

    return this.store.select(selectors.{{evt_get_list_success | camelcase}});
  }

  {{facade_service_get_item}}(id: any, fetchFromAPI = false): Observable<any> {
    if(fetchFromAPI) {
      this.store.dispatch(actions.{{evt_get_item | pascalcase}}({ id }));
    }  else {
      this.{{facade_service_get_item + 'InState'}}(id);
    }

    return this.store.select(selectors.{{evt_get_item_success | camelcase}});
  }

  {{facade_service_save_item}}({{entity_store_camelcase}}: any): Observable<any> {
    this.store.dispatch(actions.{{evt_post_item | pascalcase}}({ {{entity_store_camelcase}} }));
    return this.store.select(selectors.{{evt_post_item_success | camelcase}});
  }

  {{facade_service_edit_item}}({{entity_store_camelcase}}: any): Observable<any> {
    this.store.dispatch(actions.{{evt_put_item | pascalcase}}({ {{entity_store_camelcase}} }));
    return this.store.select(selectors.{{evt_put_item_success | camelcase}});
  }

  {{facade_service_remove_item}}(id: any): Observable<any> {
    this.store.dispatch(actions.{{evt_delete_item | pascalcase}}({ id }));
    return this.store.select(selectors.{{evt_delete_item_success | camelcase}});
  }

  private {{facade_service_get_item + 'InState'}}(id: any) {
    this.store.select(selectors.{{evt_get_list_success | camelcase}}).subscribe(({{entity_store_camelcase_list}}: any) => {
      const {{entity_store_camelcase + 'Found'}} = {{entity_store_camelcase_list}}.find(({{entity_store_camelcase}}: any) => {{entity_store_camelcase}}.id === id);
      if (!!{{entity_store_camelcase + 'Found'}}) {
        this.store.dispatch(actions.{{evt_get_item_success | pascalcase}}({ {{entity_store_camelcase}}: {{entity_store_camelcase + 'Found'}} }))
      }
    })
  }
}
