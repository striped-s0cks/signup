import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { reducers } from './components/reducers';
import { SignUpPageContainer } from './components/SignUpPageContainer';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <Redirect from='/' to='signup' />
            <Route path='signup' component={SignUpPageContainer} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
