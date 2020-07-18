import { createStore } from 'redux';
import { DispatchAction, InitialState, rootReducer } from './root-reducer';

export const store = createStore<InitialState, DispatchAction, null, null>(rootReducer);
