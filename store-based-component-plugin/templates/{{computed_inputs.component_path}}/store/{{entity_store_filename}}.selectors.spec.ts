import { {{entity_failure_model_pascalcase}} } from '../models/{{entity_failure_model_filename}}-failure.model';
import { State } from './{{entity_store_filename}}.reducer';
import {
	{{evt_get_list| camelcase}},
	{{evt_get_list_success| camelcase}},
	{{evt_get_list_failure| camelcase}},
	{{evt_get_item| camelcase}},
	{{evt_get_item_success| camelcase}},
	{{evt_get_item_failure| camelcase}},
	{{evt_post_item| camelcase}},
	{{evt_post_item_success| camelcase}},
	{{evt_post_item_failure| camelcase}},
	{{evt_put_item| camelcase}},
	{{evt_put_item_success| camelcase}},
	{{evt_put_item_failure| camelcase}},
	{{evt_delete_item| camelcase}},
	{{evt_delete_item_success| camelcase}},
	{{evt_delete_item_failure| camelcase}}
} from './{{entity_store_filename}}.selectors';

describe('{{entity_store_pascalcase}} Selectors',
() => {
	const initialState: State = {
		{{entity_store_camelcase}}: null,
		{{entity_store_camelcase_list}}: null,
		loading: false,
		failure: null
	};

	it('should select the {{evt_get_list| camelcase}}', () => {
		const state: State = {
			...initialState,
			loading: true
		};

		const result = {{evt_get_list| camelcase}}.projector(state);
		expect(result).toEqual(true);
	});

	it('should select the {{evt_get_list_success| camelcase}}', () => {
		const state: State = {
			...initialState,
			{{entity_store_camelcase_list}}
		};

		const result = {{evt_get_list_success| camelcase}}.projector(state);
		expect(result.length).toEqual(1);
		expect(result).toEqual({{entity_store_camelcase_list}});
	});

	it('should select the {{evt_get_list_failure| camelcase}}', () => {
		const state: State = {
			...initialState,
			failure
		};

		const result = {{evt_get_list_failure| camelcase}}.projector(state);
		expect(result?.message).toBe(failure.message);
	});

	it('should select the {{evt_get_item| camelcase}}', () => {
		const state: State = {
			...initialState,
			loading: true
		};

		const result = {{evt_get_item| camelcase}}.projector(state);
		expect(result).toEqual(true);
	});

	it('should select the {{evt_get_item_success| camelcase}}', () => {
		const state: State = {
			...initialState,
			{{entity_store_camelcase}}
		};

		const result = {{evt_get_item_success| camelcase}}.projector(state);
		expect(result).toEqual({{entity_store_camelcase}});
	});

	it('should select the {{evt_get_item_failure| camelcase}}', () => {
		const state: State = {
			...initialState,
			failure
		};

		const result = {{evt_get_item_failure| camelcase}}.projector(state);
		expect(result?.message).toBe(failure.message);
	});

	it('should select the {{evt_post_item| camelcase}}', () => {
		const state: State = {
			...initialState,
			loading: true
		};

		const result = {{evt_post_item| camelcase}}.projector(state);
		expect(result).toEqual(true);
	});

	it('should select the {{evt_post_item_success| camelcase}}', () => {
		const state: State = {
			...initialState,
			{{entity_store_camelcase}}
		};

		const result = {{evt_post_item_success| camelcase}}.projector(state);
		expect(result).toEqual({{entity_store_camelcase}});
	});

	it('should select the {{evt_post_item_failure| camelcase}}', () => {
		const state: State = {
			...initialState,
			failure
		};

		const result = {{evt_post_item_failure| camelcase}}.projector(state);
		expect(result?.message).toBe(failure.message);
	});

	it('should select the {{evt_put_item| camelcase}}', () => {
		const state: State = {
			...initialState,
			loading: true
		};

		const result = {{evt_put_item| camelcase}}.projector(state);
		expect(result).toEqual(true);
	});

	it('should select the {{evt_put_item_success| camelcase}}', () => {
		const state: State = {
			...initialState,
			{{entity_store_camelcase}}
		};

		const result = {{evt_put_item_success| camelcase}}.projector(state);
		expect(result).toEqual({{entity_store_camelcase}});
	});

	it('should select the {{evt_put_item_failure| camelcase}}', () => {
		const state: State = {
			...initialState,
			failure
		};

		const result = {{evt_put_item_failure| camelcase}}.projector(state);
		expect(result?.message).toBe(failure.message);
	});

	it('should select the {{evt_delete_item| camelcase}}', () => {
		const state: State = {
			...initialState,
			loading: true
		};

		const result = {{evt_delete_item| camelcase}}.projector(state);
		expect(result).toEqual(true);
	});

	it('should select the {{evt_delete_item_success| camelcase}}', () => {
		const state: State = {
			...initialState,
			loading: false
		};

		const result = {{evt_delete_item_success| camelcase}}.projector(state);
		expect(result).toEqual(false);
	});

	it('should select the {{evt_delete_item_failure| camelcase}}', () => {
		const state: State = {
			...initialState,
			failure
		};

		const result = {{evt_delete_item_failure| camelcase}}.projector(state);
		expect(result?.message).toBe(failure.message);
	});
});

const {{entity_store_camelcase}} = { id: 1 };
const {{entity_store_camelcase_list}} = [{{entity_store_camelcase}}];
const failure: {{entity_failure_model_pascalcase}} = { message: 'Error test' };