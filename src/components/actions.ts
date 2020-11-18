import { User } from "./types";

export const actionTypes = {
    SetUser: 'SetUser',
};

export interface SetUserAction {
    type: string;
    user: User;
}

export const actions = {
    createUser(firstName: string, email: string, _password: string): SetUserAction {
        return {
            type: actionTypes.SetUser,
            user: {
                firstName,
                email,
            },
        };
    },
};
