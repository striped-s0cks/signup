import { combineReducers } from "redux";
import { actionTypes, SetUserAction } from "./actions";
import { User } from "./types";

function user(state = {} as User, action: SetUserAction): User {
    if (action.type === actionTypes.SetUser) {
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
