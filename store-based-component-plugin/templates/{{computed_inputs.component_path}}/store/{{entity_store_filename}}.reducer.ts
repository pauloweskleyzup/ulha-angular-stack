import { createReducer, on } from '@ngrx/store';
import { AbstractFetchStateModel } from '../models/abstract-fetch-state.model';
import * as actions from './{{entity_store_filename}}.actions';

export interface State extends AbstractFetchStateModel {
    {{entity_store_camelcase}}?: any | null;
    {{entity_store_camelcase_list}}?: any | null;
}

export const initialState: State = {
    {{entity_store_camelcase}}: null,
    {{entity_store_camelcase_list}}: null,
    loading: false,
    failure: null
};

export const {{reducer_name}} = createReducer(
    initialState,
    on(actions.{{evt_get_list | pascalcase}}, (state) => ({
        ...state,
        loading: true
    })),

    on(actions.{{evt_get_list_success | pascalcase}}, (state, { {{entity_store_camelcase_list}} }) => ({
        ...state,
        {{entity_store_camelcase_list}},
        loading: false,
        failure: null,
    })),

    on(actions.{{evt_get_list_failure | pascalcase}}, (state, { failure }) => ({
        ...state,
        loading: false,
        failure
    })),

    on(actions.{{evt_get_item | pascalcase}}, (state) => ({
        ...state,
        loading: true
    })),

    on(actions.{{evt_get_item_success | pascalcase}}, (state, { {{entity_store_camelcase}} }) => ({
        ...state,
        {{entity_store_camelcase}},
        loading: false,
        failure: null,
    })),

    on(actions.{{evt_get_item_failure | pascalcase}}, (state, { failure }) => ({
        ...state,
        loading: false,
        failure
    })),

    on(actions.{{evt_post_item | pascalcase}}, (state, { {{entity_store_camelcase}} }) => ({
        ...state,
        {{entity_store_camelcase}},
        loading: true
    })),

    on(actions.{{evt_post_item_success | pascalcase}}, (state, { {{entity_store_camelcase}} }) => ({
        ...state,
        {{entity_store_camelcase}},
        loading: false,
        failure: null
    })),

    on(actions.{{evt_post_item_failure | pascalcase}}, (state, { failure }) => ({
        ...state,
        loading: false,
        failure
    })),

    on(actions.{{evt_put_item | pascalcase}}, (state) => ({
        ...state,
        loading: true
    })),

    on(actions.{{evt_put_item_success | pascalcase}}, (state, { {{entity_store_camelcase}} }) => ({
        ...state,
        {{entity_store_camelcase}},
        loading: false,
        failure: null
    })),

    on(actions.{{evt_put_item_failure | pascalcase}}, (state, { failure }) => ({
        ...state,
        loading: false,
        failure
    })),

    on(actions.{{evt_delete_item | pascalcase}}, (state) => ({
        ...state,
        loading: true
    })),

    on(actions.{{evt_delete_item_success | pascalcase}}, (state) => ({
        ...state,
        loading: false,
        failure: null
    })),

    on(actions.{{evt_delete_item_failure | pascalcase}}, (state, { failure }) => ({
        ...state,
        loading: false,
        failure
    }))
);

