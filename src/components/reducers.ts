import { combineReducers } from "redux";
import { actionTypes, CreateUserAction } from "./actions";
import { User } from "./types";

function user(state = null, action: CreateUserAction): User | null {
    if (action.type === actionTypes.CreateUser) {
        return action.user;
    }

    return state;
}

export interface StoreState {
    user: User;
}

export const reducers = combineReducers({
    user,
});
