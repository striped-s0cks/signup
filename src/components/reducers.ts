import { combineReducers } from "redux";
import { actionTypes, CreateUserAction } from "./actions";
import { User } from "./types";

function user(state = {} as User, action: CreateUserAction): User {
    if (action.type === actionTypes.CreateUser) {
        return action.user;
    }

    return state;
}

export const reducers = combineReducers({
    user,
});
