import { createAction, props } from '@ngrx/store';
import { {{ failure_model }} } from '../models/{{ filename }}-failure.model';

export const {{ evt_get_list| pascalcase }} = createAction(
    '[{{ evt_get_list| pascalcase }}] {{evt_get_list }}'
);

export const {{ evt_get_list_success| pascalcase }} = createAction(
    '[{{ evt_get_list_success| pascalcase }}] {{evt_get_list_success }}',
    props<{ {{ entity_camel_plural }}: any }>()
);

export const {{ evt_get_list_failure| pascalcase }} = createAction(
    '[{{ evt_get_list_failure| pascalcase }}] {{evt_get_list_failure }}',
    props<{ failure: {{ failure_model }} }>()
);

export const {{ evt_get_item| pascalcase }} = createAction(
    '[{{ evt_get_item| pascalcase }}] {{evt_get_item }}',
    props<{ id: any }>()
);

export const {{ evt_get_item_success| pascalcase }} = createAction(
    '[{{ evt_get_item_success| pascalcase }}] {{evt_get_item_success }}',
    props<{ {{ entity_camel }}: any }>()
);

export const {{ evt_get_item_failure| pascalcase }} = createAction(
    '[{{ evt_get_item_failure| pascalcase }}] {{evt_get_item_failure }}',
    props<{ failure: {{ failure_model }} }>()
);

export const {{ evt_post_item| pascalcase }} = createAction(
    '[{{ evt_post_item| pascalcase }}] {{evt_post_item }}',
    props<{ {{ entity_camel }}: any }>()
);

export const {{ evt_post_item_success| pascalcase }} = createAction(
    '[{{ evt_post_item_success| pascalcase }}] {{evt_post_item_success }}',
    props<{ {{ entity_camel }}: any }>()
);

export const {{ evt_post_item_failure| pascalcase }} = createAction(
    '[{{ evt_post_item_failure| pascalcase }}] {{evt_post_item_failure }}',
    props<{ failure: {{ failure_model }} }>()
);

export const {{ evt_put_item| pascalcase }} = createAction(
    '[{{ evt_put_item| pascalcase }}] {{evt_put_item }}',
    props<{ {{ entity_camel }}: any }>()
);

export const {{ evt_put_item_success| pascalcase }} = createAction(
    '[{{ evt_put_item_success| pascalcase }}] {{ evt_put_item_success }}',
    props<{ {{ entity_camel }}: any }>()
);

export const {{ evt_put_item_failure| pascalcase }} = createAction(
    '[{{ evt_put_item_failure| pascalcase }}] {{ evt_put_item_failure }}',
    props<{ failure: {{ failure_model }} }>()
);

export const {{ evt_delete_item| pascalcase }} = createAction(
    '[{{ evt_delete_item| pascalcase }}] {{ evt_delete_item }}',
    props<{ id: any }>()
);

export const {{ evt_delete_item_success| pascalcase }} = createAction(
    '[{{ evt_delete_item_success| pascalcase }}] {{ evt_delete_item_success }}'
);

export const {{ evt_delete_item_failure| pascalcase }} = createAction(
    '[{{ evt_delete_item_failure| pascalcase }}] {{ evt_delete_item_failure }}',
    props<{ failure: {{ failure_model }} }>()
);
