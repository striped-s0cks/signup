import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Dispatch } from "redux";
import { actions } from "./actions";
import { DispatchProps, SignUpPage } from "./SignUpPage";

function mapDispatchToProps(dispatch: Dispatch, _props: any): DispatchProps {
    return {
        createUser: (firstName: string, email: string, password: string) => {
            dispatch(actions.createUser(firstName, email, password));
        },
    };
}

export const SignUpPageContainer = withRouter(connect(
    null,
    mapDispatchToProps
)(SignUpPage));
