import Item from '../models/Item';
import { ActionTypes, Action} from '../action/item';
export interface State {
    items: Item[],
    lastId: number
}

export const initialState: State = {
    items: [],
    lastId: 0
}

export function itemReducer( state: State = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.ADD_ITEM: {
            const item = action.payload.item;
            return {
                ...state,
                items: [...state.items, item]
            }
        }
        case ActionTypes.DELETE_ITEM: {
            const itemIndex = action.payload.itemIndex;
            return {
                ...state,
                items: state.items.splice(itemIndex, 1)
            }
        }
        default:
            return state;

    }
}