import { connect } from "react-redux";
import { ConfirmationPage, StateProps } from "./ConfirmationPage";
import { StoreState } from "./reducers";

function mapStateToProps(state: StoreState, _props: any): StateProps {
    return {
        user: state.user,
    };
}

export const ConfirmationPageContainer = connect(
    mapStateToProps
)(ConfirmationPage);
