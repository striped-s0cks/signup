import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { actions } from "../actions";
import { DispatchProps, SignUpPage } from "./SignUpPage";

function mapDispatchToProps(dispatch: Dispatch, _props: any): DispatchProps {
    return {
        createUser: (firstName: string, email: string, password: string, callback?: () => void) => {
            dispatch(actions.createUser(firstName, email, password));
            callback && callback();
        },
    };
}

export const SignUpPageContainer = connect(
    null,
    mapDispatchToProps
)(SignUpPage);
