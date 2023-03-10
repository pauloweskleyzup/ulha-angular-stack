import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from "../store/{{ filename }}.reducer";
import * as selectors from '../store/{{ filename }}.selectors';
import * as actions from "../store/{{ filename }}.actions";

@Injectable({
  providedIn: 'root'
})
export class {{ facade_service_pascal }} {

  constructor(readonly store: Store<State>) { }

  {{ get_list }}(fetchFromAPI = false): Observable<any> {
    if(fetchFromAPI) {
      this.store.dispatch(actions.{{ evt_get_list | pascalcase }}());
    }

    return this.store.select(selectors.{{ evt_get_list_success | camelcase }});
  }

  {{ get_item }}(id: any, fetchFromAPI = false): Observable<any> {
    if(fetchFromAPI) {
      this.store.dispatch(actions.{{ evt_get_item | pascalcase }}({ id }));
    }  else {
      this.{{ get_item + 'InState' }}(id);
    }

    return this.store.select(selectors.{{ evt_get_item_success | camelcase }});
  }

  {{ save_item }}({{ entity_camel }}: any): Observable<any> {
    this.store.dispatch(actions.{{ evt_post_item | pascalcase }}({ {{ entity_camel }} }));
    return this.store.select(selectors.{{ evt_post_item_success | camelcase }});
  }

  {{ edit_item }}({{ entity_camel }}: any): Observable<any> {
    this.store.dispatch(actions.{{ evt_put_item | pascalcase }}({ {{ entity_camel }} }));
    return this.store.select(selectors.{{ evt_put_item_success | camelcase }});
  }

  {{ remove_item }}(id: any): Observable<any> {
    this.store.dispatch(actions.{{ evt_delete_item | pascalcase }}({ id }));
    return this.store.select(selectors.{{ evt_delete_item_success | camelcase }});
  }

  private {{ get_item + 'InState' }}(id: any) {
    this.store.select(selectors.{{ evt_get_list_success | camelcase }}).subscribe(({{ entity_camel_plural }}: any) => {
      const {{ entity_camel + 'Found' }} = {{ entity_camel_plural }}.find(({{ entity_camel }}: any) => {{ entity_camel }}.id === id);
      if (!!{{ entity_camel + 'Found' }}) {
        this.store.dispatch(actions.{{ evt_get_item_success | pascalcase }}({ {{ entity_camel }}: {{ entity_camel + 'Found' }} }))
      }
    })
  }
}
