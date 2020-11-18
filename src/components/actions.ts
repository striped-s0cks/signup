import { User } from "./types";

export const actionTypes = {
    CreateUser: 'CreateUser',
};

export interface CreateUserAction {
    type: string;
    user: User;
}

export const actions = {
    createUser(firstName: string, email: string, _password: string): CreateUserAction {
        return {
            type: actionTypes.CreateUser,
            user: {
                firstName,
                email,
            },
        };
    },
};
