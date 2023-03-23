import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { marbles } from 'rxjs-marbles/marbles';

import { {{service_classname}} } from '../services/service/{{service_filename}}.service';
import { {{service_classname_mock}} } from '../services/service/{{service_filename}}.service.mock';
import { {{effects_name}} } from './{{entity_store_filename}}.effects';
import { {{reducer_name}} } from './{{entity_store_filename}}.reducer';
import * as actions from './{{entity_store_filename}}.actions';

describe('{{entity_store_pascalcase}} Effects', () => {
	let actions$: Observable<any> = of(null);
	let effects: {{effects_name}};
	let service: {{service_classname}};

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				StoreModule.forRoot({{reducer_name}}),
				HttpClientTestingModule
			],
			providers: [
				{{effects_name}},
				provideMockActions(() => actions$),
				{
					provide: {{service_classname}},
					useClass:  {{service_classname_mock}}
				}
			]
		});

		effects = TestBed.inject({{effects_name}});
		service = TestBed.inject({{service_classname}});
	});

	it('should be created', () => {
		expect(effects).toBeTruthy();
	});

	it('should when intercepting the {{evt_get_list| pascalcase}} action and return the {{evt_get_list_success| pascalcase}} action with the pet list.', marbles(m => {
		const {{entity_store_camelcase_list}} = [{ id: 1 }];
		const action = actions.{{evt_get_list| pascalcase}}();
		const completion = actions.{{evt_get_list_success| pascalcase}}({ {{entity_store_camelcase_list}} });
		const spy = spyOn(service, '{{service_get_list}}').and.returnValue(of({{entity_store_camelcase_list}}));

		actions$ = m.hot('a', { a: action });
		const expected = m.cold('b', { b: completion });

		m.expect(effects.{{facade_service_get_list}}$).toBeObservable(expected);
		effects.{{facade_service_get_list}}$.subscribe(() => expect(spy).toHaveBeenCalled());
	}));

	it('should intercept {{evt_get_list| pascalcase}} action and return {{evt_get_list_failure| pascalcase}} with a failure message', marbles(m => {
		const failure = { message: 'error' };
		const action = actions.{{evt_get_list| pascalcase}}();
		const completion = actions.{{evt_get_list_failure| pascalcase}}({ failure });
		const spy = spyOn(service, '{{service_get_list}}').and.returnValue(throwError(failure));

		actions$ = m.hot('a', { a: action });
		const expected = m.cold('b', { b: completion });

		m.expect(effects.{{facade_service_get_list}}$).toBeObservable(expected);
		effects.{{facade_service_get_list}}$.subscribe(() => expect(spy).toHaveBeenCalled());
	}));

	it('should when intercepting the {{evt_get_item| pascalcase}} action and return the {{evt_get_item_success| pascalcase}} action with the {{entity_store_camelcase}} item.', marbles(m => {
		const {{entity_store_camelcase}} = { id: 1 };
		const action = actions.{{evt_get_item| pascalcase}}({ id: {{entity_store_camelcase}}.id });
		const completion = actions.{{evt_get_item_success| pascalcase}}({ {{entity_store_camelcase}} });
		const spy = spyOn(service, '{{service_get_item}}').and.returnValue(of({ {{entity_store_camelcase}} }));

		actions$ = m.hot('a', { a: action });
		const expected = m.cold('b', { b: completion });

		m.expect(effects.{{facade_service_get_item}}$).toBeObservable(expected);
		effects.{{facade_service_get_item}}$.subscribe(() => expect(spy).toHaveBeenCalled());
	}));

	it('should intercept {{evt_get_item| pascalcase}} action and return {{evt_get_item_failure| pascalcase}} with a failure message', marbles(m => {
		const failure = { message: 'error' };
		const id = 1;
		const action = actions.{{evt_get_item| pascalcase}}({ id });
		const completion = actions.{{evt_get_item_failure| pascalcase}}({ failure });
		const spy = spyOn(service, '{{service_get_item}}').and.returnValue(throwError(failure));

		actions$ = m.hot('a', { a: action });
		const expected = m.cold('b', { b: completion });

		m.expect(effects.{{facade_service_get_item}}$).toBeObservable(expected);
		effects.{{facade_service_get_item}}$.subscribe(() => expect(spy).toHaveBeenCalled());
	}));

	it('should when intercepting the {{evt_post_item| pascalcase}} action and return the {{evt_post_item_success| pascalcase}} action with the {{entity_store_camelcase}} saved.', marbles(m => {
		const {{entity_store_camelcase}} = { id: 1 };
		const action = actions.{{evt_post_item| pascalcase}}({ {{entity_store_camelcase}} });
		const completion = actions.{{evt_post_item_success| pascalcase}}({ {{entity_store_camelcase}} });
		const spy = spyOn(service, '{{service_save_item}}').and.returnValue(of({{entity_store_camelcase}}));

		actions$ = m.hot('a', { a: action });
		const expected = m.cold('b', { b: completion });

		m.expect(effects.{{facade_service_save_item}}$).toBeObservable(expected);
		effects.{{facade_service_save_item}}$.subscribe(() => expect(spy).toHaveBeenCalled());
	}));

	it('should intercept {{evt_post_item| pascalcase}} action and return {{evt_post_item_failure| pascalcase}} with a failure message', marbles(m => {
		const failure = { message: 'error' };
		const pet = {id: 1};
		const action = actions.{{evt_post_item| pascalcase}}({ pet });
		const completion = actions.{{evt_post_item_failure| pascalcase}}({ failure });
		const spy = spyOn(service, '{{service_save_item}}').and.returnValue(throwError(failure));

		actions$ = m.hot('a', { a: action });
		const expected = m.cold('b', { b: completion });

		m.expect(effects.{{facade_service_save_item}}$).toBeObservable(expected);
		effects.{{facade_service_save_item}}$.subscribe(() => expect(spy).toHaveBeenCalled());
	}));

	it('should when intercepting the {{evt_put_item| pascalcase}} action and return the {{evt_put_item_success| pascalcase}} action with the {{entity_store_camelcase}} saved.', marbles(m => {
		const {{entity_store_camelcase}} = { id: 1 };
		const action = actions.{{evt_put_item| pascalcase}}({ {{entity_store_camelcase}} });
		const completion = actions.{{evt_put_item_success| pascalcase}}({ {{entity_store_camelcase}} });
		const spy = spyOn(service, '{{service_edit_item}}').and.returnValue(of({{entity_store_camelcase}}));

		actions$ = m.hot('a', { a: action });
		const expected = m.cold('b', { b: completion });

		m.expect(effects.{{facade_service_edit_item}}$).toBeObservable(expected);
		effects.{{facade_service_edit_item}}$.subscribe(() => expect(spy).toHaveBeenCalled());
	}));

	it('should intercept {{evt_put_item| pascalcase}} action and return {{evt_put_item_failure| pascalcase}} with a failure message', marbles(m => {
		const failure = { message: 'error' };
		const {{entity_store_camelcase}} = {id: 1};
		const action = actions.{{evt_put_item| pascalcase}}({ {{entity_store_camelcase}} });
		const completion = actions.{{evt_put_item_failure| pascalcase}}({ failure });
		const spy = spyOn(service, '{{service_edit_item}}').and.returnValue(throwError(failure));

		actions$ = m.hot('a', { a: action });
		const expected = m.cold('b', { b: completion });

		m.expect(effects.{{facade_service_edit_item}}$).toBeObservable(expected);
		effects.{{facade_service_edit_item}}$.subscribe(() => expect(spy).toHaveBeenCalled());
	}));

	it('should when intercepting the {{evt_delete_item| pascalcase}} action and return the {{evt_delete_item_success| pascalcase}} action.', marbles(m => {
		const id = 1;
		const action = actions.{{evt_delete_item| pascalcase}}({ id });
		const completion = actions.{{evt_delete_item_success| pascalcase}}();
		const spy = spyOn(service, '{{service_remove_item}}').and.returnValue(of(id));

		actions$ = m.hot('a', { a: action });
		const expected = m.cold('b', { b: completion });

		m.expect(effects.{{facade_service_remove_item}}$).toBeObservable(expected);
		effects.{{facade_service_remove_item}}$.subscribe(() => expect(spy).toHaveBeenCalled());
	}));

	it('should intercept {{evt_delete_item| pascalcase}} action and return {{evt_delete_item_failure| pascalcase}} with a failure message', marbles(m => {
		const failure = { message: 'error' };
		const id = 1;
		const action = actions.{{evt_delete_item| pascalcase}}({ id });
		const completion = actions.{{evt_delete_item_failure| pascalcase}}({ failure });
		const spy = spyOn(service, '{{service_remove_item}}').and.returnValue(throwError(failure));

		actions$ = m.hot('a', { a: action });
		const expected = m.cold('b', { b: completion });

		m.expect(effects.{{facade_service_remove_item}}$).toBeObservable(expected);
		effects.{{facade_service_remove_item}}$.subscribe(() => expect(spy).toHaveBeenCalled());
	}));
});
