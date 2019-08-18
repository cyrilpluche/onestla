import {UserTypes} from "../actions/user.action";

const types = UserTypes

export interface UserState {
    id: string
}

const initialState: UserState = {
    id: null
}

export function userReducer(state = initialState, action: {type: string, payload: any}) {
    switch (action.type) {
        case types.USERCHANGE:
            return {
                ...state,
                id: action.payload
            }
        default:
            return state
    }
}