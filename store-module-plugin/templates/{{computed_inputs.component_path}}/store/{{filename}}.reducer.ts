import { createReducer, on } from "@ngrx/store";
import { AbstractFetchStateModel } from "../models/abstract-fetch-state.model";
import * as actions from "./{{ filename }}.actions";

export interface State extends AbstractFetchStateModel {
    {{ entity_camel }}?: any | null;
    {{ entity_camel_plural }}?: any | null;
}

export const {{'initial' + entity_pascal + 'State'}}: State = {
    {{ entity_camel }}: null,
    {{ entity_camel_plural }}: null,
    loading: false,
    failure: null
};

export const {{ reducer_name }} = createReducer(
    {{ 'initial' + entity_pascal + 'State' }},
    on(actions.{{ evt_get_list | pascalcase }}, (state) => ({
        ...state,
        loading: true
    })),

    on(actions.{{ evt_get_list_success | pascalcase }}, (state, { {{ entity_camel_plural }} }) => ({
        ...state,
        {{ entity_camel_plural }},
        loading: false,
        failure: null,
    })),

    on(actions.{{ evt_get_list_failure | pascalcase }}, (state, { failure }) => ({
        ...state,
        loading: false,
        failure
    })),

    on(actions.{{ evt_get_item | pascalcase }}, (state) => ({
        ...state,
        loading: true
    })),

    on(actions.{{ evt_get_item_success | pascalcase }}, (state, { {{ entity_camel }} }) => ({
        ...state,
        {{ entity_camel }},
        loading: false,
        failure: null,
    })),

    on(actions.{{ evt_get_item_failure | pascalcase }}, (state, { failure }) => ({
        ...state,
        loading: false,
        failure
    })),

    on(actions.{{ evt_post_item | pascalcase }}, (state, { {{ entity_camel }} }) => ({
        ...state,
        {{ entity_camel }},
        loading: true
    })),

    on(actions.{{ evt_post_item_success | pascalcase }}, (state, { {{ entity_camel }} }) => ({
        ...state,
        {{ entity_camel }},
        loading: false,
        failure: null
    })),

    on(actions.{{ evt_post_item_failure | pascalcase }}, (state, { failure }) => ({
        ...state,
        loading: false,
        failure
    })),

    on(actions.{{ evt_put_item | pascalcase }}, (state) => ({
        ...state,
        loading: true
    })),

    on(actions.{{ evt_put_item_success | pascalcase }}, (state, { {{ entity_camel }} }) => ({
        ...state,
        {{ entity_camel }},
        loading: false,
        failure: null
    })),

    on(actions.{{ evt_put_item_failure | pascalcase }}, (state, { failure }) => ({
        ...state,
        loading: false,
        failure
    })),

    on(actions.{{ evt_delete_item | pascalcase }}, (state) => ({
        ...state,
        loading: true
    })),

    on(actions.{{ evt_delete_item_success | pascalcase }}, (state) => ({
        ...state,
        loading: false,
        failure: null
    })),

    on(actions.{{ evt_delete_item_failure | pascalcase }}, (state, { failure }) => ({
        ...state,
        loading: false,
        failure
    }))
);

