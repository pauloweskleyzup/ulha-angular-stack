import { createAction, props } from '@ngrx/store';
import { {{ failure_model }} } from '../models/{{ filename }}-failure.model';

export const {{ evt_get_list| pascalcase }} = createAction(
    '[{{ evt_get_list| pascalcase }}] {{evt_get_list| title }}'
);

export const {{ evt_get_list_success| pascalcase }} = createAction(
    '[{{ evt_get_list_success| pascalcase }}] {{evt_get_list_success| title }}',
    props<{ {{ entity_camel_plural }}: any }>()
);

export const {{ evt_get_list_failure| pascalcase }} = createAction(
    '[{{ evt_get_list_failure| pascalcase }}] {{evt_get_list_failure| title }}',
    props<{ failure: {{ failure_model }} }>()
);

export const {{ evt_get_item| pascalcase }} = createAction(
    '[{{ evt_get_item| pascalcase }}] {{evt_get_item| title }}',
    props<{ id: any }>()
);

export const {{ evt_get_item_success| pascalcase }} = createAction(
    '[{{ evt_get_item_success| pascalcase }}] {{evt_get_item_success| title }}',
    props<{ {{ entity_camel }}: any }>()
);

export const {{ evt_get_item_failure| pascalcase }} = createAction(
    '[{{ evt_get_item_failure| pascalcase }}] {{evt_get_item_failure| title }}',
    props<{ failure: {{ failure_model }} }>()
);

export const {{ evt_post_item| pascalcase }} = createAction(
    '[{{ evt_post_item| pascalcase }}] {{evt_post_item| title }}',
    props<{ {{ entity_camel }}: any }>()
);

export const {{ evt_post_item_success| pascalcase }} = createAction(
    '[{{ evt_post_item_success| pascalcase }}] {{evt_post_item_success| title }}',
    props<{ {{ entity_camel }}: any }>()
);

export const {{ evt_post_item_failure| pascalcase }} = createAction(
    '[{{ evt_post_item_failure| pascalcase }}] {{evt_post_item_failure| title }}',
    props<{ failure: {{ failure_model }} }>()
);

export const {{ evt_put_item| pascalcase }} = createAction(
    '[{{ evt_put_item| pascalcase }}] {{evt_put_item| title }}',
    props<{ {{ entity_camel }}: any }>()
);

export const {{ evt_put_item_success| pascalcase }} = createAction(
    '[{{ evt_put_item_success| pascalcase }}] {{ evt_put_item_success| title }}',
    props<{ {{ entity_camel }}: any }>()
);

export const {{ evt_put_item_failure| pascalcase }} = createAction(
    '[{{ evt_put_item_failure| pascalcase }}] {{ evt_put_item_failure| title }}',
    props<{ failure: {{ failure_model }} }>()
);

export const {{ evt_delete_item| pascalcase }} = createAction(
    '[{{ evt_delete_item| pascalcase }}] {{ evt_delete_item| title }}',
    props<{ id: any }>()
);

export const {{ evt_delete_item_success| pascalcase }} = createAction(
    '[{{ evt_delete_item_success| pascalcase }}] {{ evt_delete_item_success| title }}'
);

export const {{ evt_delete_item_failure| pascalcase }} = createAction(
    '[{{ evt_delete_item_failure| pascalcase }}] {{ evt_delete_item_failure| title }}',
    props<{ failure: {{ failure_model }} }>()
);
