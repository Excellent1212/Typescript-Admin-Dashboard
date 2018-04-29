import Item from '../models/Item';
export enum ActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    DELETE_ITEM = 'DELETE_ITEM'
}

export interface AddItemAction { type: ActionTypes.ADD_ITEM, payload: {item: Item}}
export interface DeleteItemAction { type: ActionTypes.DELETE_ITEM, payload: {itemIndex: number}}

export function AddItem(name: string): AddItemAction {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
            item: {
                id: 0,
                'name': name
            }
        }
    }
}

export function DeleteItem(itemIndex: number): DeleteItemAction {
    return {
        type: ActionTypes.DELETE_ITEM,
        payload: {
            'itemIndex': itemIndex
        }
    }
}

export type Action = AddItemAction | DeleteItemAction
