import Item from '../models/Item';
export enum ActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    DELETE_ITEM = 'DELETE_ITEM'
}

let nextId = 0

export interface AddItemAction { type: ActionTypes.ADD_ITEM, payload: {item: Item}}
export interface DeleteItemAction { type: ActionTypes.DELETE_ITEM, payload: {itemIndex: number}}

export function AddItem(firstName: string, lastName: string, birthday: string, phoneNumber: string): AddItemAction {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: {
            item: {
                id: nextId++,
                'firstName': firstName,
                'lastName': lastName,
                'birthday': birthday,
                'phoneNumber': phoneNumber
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
