import * as actions from './{{entity_store_filename}}.actions';

describe('{{entity_store_pascalcase}} Actions', () => {
	it('Should create a {{evt_get_list| pascalcase}} action', () => {
		const action = actions.{{evt_get_list| pascalcase}}();

		expect(action.type).toEqual(actions.{{evt_get_list| pascalcase}}.type);
	});

	it('Should create a {{evt_get_list_success| pascalcase}} action containing a payload', () => {
		const {{entity_store_camelcase_list}} = [{ }];
		const action = actions.{{evt_get_list_success| pascalcase}}({ {{entity_store_camelcase_list}} });

		expect({ ...action }).toEqual({
			type: actions.{{evt_get_list_success| pascalcase}}.type,
			{{entity_store_camelcase_list}}: action.{{entity_store_camelcase_list}}
		});
	});

	it('Should create a {{evt_get_list_failure| pascalcase}} action containing a error', () => {
		const failure = { message: 'Error loading list.' };
		const action = actions.{{evt_get_list_failure| pascalcase}}({ failure });

		expect({ ...action }).toEqual({
			type: actions.{{evt_get_list_failure| pascalcase}}.type,
			failure: action.failure
		});
	});

	it('Should create a {{evt_get_item| pascalcase}} action', () => {
		const id = 1;
		const action = actions.{{evt_get_item| pascalcase}}({ id });

		expect({ ...action }).toEqual({
			type: actions.{{evt_get_item| pascalcase}}.type,
			id: action.id
		});
	});

	it('Should create a {{evt_get_item_success| pascalcase}} action containing a payload', () => {
		const {{entity_store_camelcase}} = { id: 1 };
		const action = actions.{{evt_get_item_success| pascalcase}}({ {{entity_store_camelcase}} });

		expect({ ...action }).toEqual({
			type: actions.{{evt_get_item_success| pascalcase}}.type,
			{{entity_store_camelcase}}: action.{{entity_store_camelcase}}
		});
	});

	it('Should create a {{evt_get_item_failure| pascalcase}} action containing a error', () => {
		const failure = { message: 'Error loading selected item.' };
		const action = actions.{{evt_get_item_failure| pascalcase}}({ failure });

		expect({ ...action }).toEqual({
			type: actions.{{evt_get_item_failure| pascalcase}}.type,
			failure: action.failure
		});
	});

	it('Should create a {{evt_post_item| pascalcase}} action', () => {
		const {{entity_store_camelcase}} = { id: 1 };
		const action = actions.{{evt_post_item | pascalcase}}({ {{entity_store_camelcase}} });

		expect({ ...action }).toEqual({
			type: actions.{{evt_post_item| pascalcase}}.type,
			{{entity_store_camelcase}}: action.{{entity_store_camelcase}}
		});
	});

	it('Should create a {{evt_post_item_success| pascalcase}} action containing a payload', () => {
		const {{entity_store_camelcase}} = { id: 1 };
		const action = actions.{{evt_post_item_success| pascalcase}}({ {{entity_store_camelcase}} });

		expect({ ...action }).toEqual({
			type: actions.{{evt_post_item_success| pascalcase}}.type,
			{{entity_store_camelcase}}: action.{{entity_store_camelcase}}
		});
	});

	it('Should create a {{evt_post_item_failure| pascalcase}} action containing a error', () => {
		const failure = { message: 'Error creating selected item.' };
		const action = actions.{{evt_post_item_failure| pascalcase}}({ failure });

		expect({ ...action }).toEqual({
			type: actions.{{evt_post_item_failure| pascalcase}}.type,
			failure: action.failure
		});
	});

	it('Should create a {{evt_put_item| pascalcase}} action', () => {
		const {{entity_store_camelcase}} = { id: 1 };
		const action = actions.{{evt_put_item| pascalcase}}({ {{entity_store_camelcase}} });

		expect({ ...action }).toEqual({
			type: actions.{{evt_put_item| pascalcase}}.type,
			{{entity_store_camelcase}}: action.{{entity_store_camelcase}}
		});
	});

	it('Should create a {{evt_put_item_success| pascalcase}} action containing a payload', () => {
		const {{entity_store_camelcase}} = { id: 1 };
		const action = actions.{{evt_put_item_success| pascalcase}}({ {{entity_store_camelcase}} });

		expect({ ...action }).toEqual({
			type: actions.{{evt_put_item_success| pascalcase}}.type,
			{{entity_store_camelcase}}: action.{{entity_store_camelcase}}
		});
	});

	it('Should create a {{evt_put_item_failure| pascalcase}} action containing a error', () => {
		const failure = { message: 'Error updating selected item.' };
		const action = actions.{{evt_put_item_failure| pascalcase}}({ failure });

		expect({ ...action }).toEqual({
			type: actions.{{evt_put_item_failure| pascalcase}}.type,
			failure: action.failure
		});
	});

	it('Should create a {{evt_delete_item| pascalcase}} action', () => {
		const id = 1;
		const action = actions.{{evt_delete_item| pascalcase}}({ id });

		expect({ ...action }).toEqual({
			type: actions.{{evt_delete_item| pascalcase}}.type,
			id: action.id
		});
	});

	it('Should create a {{evt_delete_item_success| pascalcase}} action containing a payload', () => {
		const action = actions.{{evt_delete_item_success| pascalcase}}();

		expect({ ...action }).toEqual({ type: actions.{{evt_delete_item_success| pascalcase}}.type });
	});

	it('Should create a {{evt_delete_item_failure| pascalcase}} action containing a error', () => {
		const failure = { message: 'Error deleting selected item.' };
		const action = actions.{{evt_delete_item_failure| pascalcase}}({ failure });

		expect({ ...action }).toEqual({
			type: actions.{{evt_delete_item_failure| pascalcase}}.type,
			failure: action.failure
		});
	});
});