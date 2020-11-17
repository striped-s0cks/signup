import { Dispatch } from "redux";
import { User } from "./types";

export const actionTypes = {
    SetUser: 'SetUser',
};

export interface SetUserAction {
    type: string;
    user: User;
}

export const actions = {
    createUser(firstName: string, email: string, _password: string, callback?: () => void) {
        return (dispatch: Dispatch) => {
            // .... send all the info to server and let it do its magic .....
            dispatch(actions.setUser(firstName, email));
            callback && callback();
        };
    },

    setUser(firstName: string, email: string): SetUserAction {
        return {
            type: actionTypes.SetUser,
            user: {
                firstName,
                email,
            },
        };
    }
};
