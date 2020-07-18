import { Action, Reducer } from 'redux';

import { IProduct } from '../entities/Product';

export interface InitialState {
  products: IProduct[] | null;
}

export const initialState: InitialState = {
  products: null,
};

export interface DispatchAction extends Action {
  payload: Partial<InitialState>;
}

export enum ActionType {
  UpdateProducts,
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionType.UpdateProducts:
      return { ...state, products: action.payload } as InitialState;
    default:
      return state;
  }
};
