import { combineReducers } from 'redux';
import * as itemState from './Item';

export interface State {
    items: itemState.State
}

export const initialState: State = {
    items: itemState.initialState
}

export const reducer = combineReducers<State>({
    items: itemState.itemReducer
})