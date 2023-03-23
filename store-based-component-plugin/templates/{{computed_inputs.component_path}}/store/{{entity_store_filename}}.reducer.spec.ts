import * as reducer from './{{entity_store_filename}}.reducer';
import * as actions from './{{entity_store_filename}}.actions';
import { PetFailureModel } from '../models/{{entity_failure_model_filename}}-failure.model';

describe('{{entity_store_pascalcase}} Reducer', () => {
  afterEach(() => {
    reducer.initialState.pet = null;
    reducer.initialState.petList = null;
  });

  it('Should return the default state', () => {
    const { initialState } = reducer;
    const state = reducer.petReducer(initialState, { type: '' });

    expect(state).toBe(initialState);
  });

  it('should {{evt_get_list| title}}', () => {
    const { initialState } = reducer;
    const action = actions.GetPetList();
    const state = reducer.petReducer(initialState, action);

    expect(state.loading).toEqual(true);
  });

  it('should {{evt_get_list_success| title}}', () => {
    const { initialState } = reducer;
    const payload: any = {
      name: 'unit-tests'
    };
    const action = actions.GetPetListSuccess({ petList: payload });
    const state = reducer.petReducer(initialState, action);

    expect(state.petList).toEqual(payload);
  });

  it('should {{evt_get_list_failure| title}}', () => {
    const { initialState } = reducer;
    const payload: PetFailureModel = { message: 'message error' };
    const action = actions.GetPetListFailure({ failure: payload });
    const state = reducer.petReducer(initialState, action);

    expect(state.failure).toEqual(payload);
  });

  it('should {{evt_get_item| title}}', () => {
    const { initialState } = reducer;
    const action = actions.GetPet({ id: 1 });
    const state = reducer.petReducer(initialState, action);

    expect(state.loading).toEqual(true);
  });

  it('should {{evt_get_item_success| title}}', () => {
    const { initialState } = reducer;
    const payload: any = {
      id: 1,
      name: 'unit-tests'
    };
    const action = actions.GetPetSuccess({ pet: payload });
    const state = reducer.petReducer(initialState, action);

    expect(state.pet).toEqual(payload);
  });

  it('should  {{evt_get_item_failure| title}}', () => {
    const { initialState } = reducer;
    const payload: PetFailureModel = { message: 'message error' };
    const action = actions.GetPetFailure({ failure: payload });
    const state = reducer.petReducer(initialState, action);

    expect(state.failure).toEqual(payload);
  });

  it('should  {{evt_post_item| title}}', () => {
    const { initialState } = reducer;
    const payload: any = {
      id: 1,
      name: 'unit-tests'
    };
    const action = actions.PostPet({ pet: payload });
    const state = reducer.petReducer(initialState, action);

    expect(state.loading).toEqual(true);
  });

  it('should {{evt_post_item_success| title}}', () => {
    const { initialState } = reducer;
    const payload: any = {
      id: 1,
      name: 'unit-tests'
    };
    const action = actions.PostPetSuccess({ pet: payload });
    const state = reducer.petReducer(initialState, action);

    expect(state.pet).toEqual(payload);
  });

  it('should {{evt_post_item_failure| title}}', () => {
    const { initialState } = reducer;
    const payload: PetFailureModel = { message: 'message error' };
    const action = actions.PostPetFailure({ failure: payload });
    const state = reducer.petReducer(initialState, action);

    expect(state.failure).toEqual(payload);
  });

  it('should {{evt_put_item| title}}', () => {
    const { initialState } = reducer;
    const payload: any = {
      id: 1,
      name: 'unit-tests'
    };
    const action = actions.PutPet({ pet: payload });
    const state = reducer.petReducer(initialState, action);

    expect(state.loading).toEqual(true);
  });

  it('should {{evt_put_item_success| title}}', () => {
    const { initialState } = reducer;
    const payload: any = {
      id: 1,
      name: 'unit-tests'
    };
    const action = actions.PutPetSuccess({ pet: payload });
    const state = reducer.petReducer(initialState, action);

    expect(state.pet).toEqual(payload);
  });

  it('should {{evt_put_item_failure| title}}', () => {
    const { initialState } = reducer;
    const payload: PetFailureModel = { message: 'message error' };
    const action = actions.PutPetFailure({ failure: payload });
    const state = reducer.petReducer(initialState, action);

    expect(state.failure).toEqual(payload);
  });

  it('should {{evt_delete_item| title}}', () => {
    const { initialState } = reducer;
    const action = actions.DeletePet({ id: 1 });
    const state = reducer.petReducer(initialState, action);

    expect(state.loading).toEqual(true);
  });

  it('should {{evt_delete_item_success| title}}', () => {
    const { initialState } = reducer;
    const action = actions.DeletePetSuccess();
    const state = reducer.petReducer(initialState, action);

    expect(state.loading).toEqual(false);
  });

  it('should {{evt_delete_item_failure| title}}', () => {
    const { initialState } = reducer;
    const payload: PetFailureModel = { message: 'message error' };
    const action = actions.DeletePetFailure({ failure: payload });
    const state = reducer.petReducer(initialState, action);

    expect(state.failure).toEqual(payload);
  });
});