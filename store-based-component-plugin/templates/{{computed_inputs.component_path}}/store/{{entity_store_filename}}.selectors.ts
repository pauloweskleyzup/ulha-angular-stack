import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './{{entity_store_filename}}.reducer';

export const {{feature_selector_name}} = createFeatureSelector<State>('{{feature_selector_name}}');

export const {{evt_get_list| camelcase}} = createSelector(
    {{feature_selector_name}},
    state => state.loading
);

export const {{evt_get_list_success| camelcase}} = createSelector(
    {{feature_selector_name}},
    state => state.{{entity_store_camelcase_list}}
);

export const {{evt_get_list_failure| camelcase}} = createSelector(
    {{feature_selector_name}},
    state => state.failure
);

export const {{evt_get_item| camelcase}} = createSelector(
    {{feature_selector_name}},
    state => state.loading
);

export const {{evt_get_item_success| camelcase}} = createSelector(
    {{feature_selector_name}},
    state => state.{{entity_store_camelcase}}
);

export const {{evt_get_item_failure| camelcase}} = createSelector(
    {{feature_selector_name}},
    state => state.failure
);

export const {{evt_post_item| camelcase}} = createSelector(
    {{feature_selector_name}},
    state => state.loading
);

export const {{evt_post_item_success| camelcase}} = createSelector(
    {{feature_selector_name}},
    state => state.{{entity_store_camelcase}}
);

export const {{evt_post_item_failure| camelcase}} = createSelector(
    {{feature_selector_name}},
    state => state.failure
);

export const {{evt_put_item| camelcase}} = createSelector(
    {{feature_selector_name}},
    state => state.loading
);

export const {{evt_put_item_success| camelcase}} = createSelector(
    {{feature_selector_name}},
    state => state.{{entity_store_camelcase}}
);

export const {{evt_put_item_failure| camelcase}} = createSelector(
    {{feature_selector_name}},
    state => state.failure
);

export const {{evt_delete_item| camelcase}} = createSelector(
    {{feature_selector_name}},
    state => state.loading
);

export const {{evt_delete_item_success| camelcase}} = createSelector(
    {{feature_selector_name}},
    state => state.loading
);

export const {{evt_delete_item_failure| camelcase}} = createSelector(
    {{feature_selector_name}},
    state => state.failure
);
