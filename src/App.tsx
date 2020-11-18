import * as React from 'react'
import { Provider } from 'react-redux';
import { Redirect, Route, RouteProps, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { reducers } from './components/reducers';

import { SignUpPageContainer } from './components/signup/SignUpPageContainer';
import { ConfirmationPageContainer } from './components/confirmation/ConfirmationPageContainer';

import './App.scss';

export const Paths = {
    signup: '/signup',
    confirmation: '/confirmation',
};

export class App extends React.Component<RouteProps> {
    render() {
        return (
            <div className='App'>
                <HashRouter>
                    <Provider store={createStore(reducers)}>
                        <Switch>
                            <Route path={Paths.signup} component={SignUpPageContainer} />
                            <Route path={Paths.confirmation} component={ConfirmationPageContainer} />
                            <Redirect to={Paths.signup} />
                        </Switch>
                    </Provider>
                </HashRouter>
            </div>
        );
    }
}
