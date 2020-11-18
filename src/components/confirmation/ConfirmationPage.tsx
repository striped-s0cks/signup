import * as React from 'react';
import { Redirect } from 'react-router';
import { Paths } from '../../App';
import { Form } from '../shared/Form';
import { User } from '../types';

import './ConfirmationPage.scss';

export interface StateProps {
    user: User;
}

export class ConfirmationPage extends React.Component<StateProps> {
    render() {
        const { user } = this.props;

        if (!user) {
            return <Redirect to={Paths.signup} />
        }
        
        return (
            <div className='ConfirmationPage'>
                <Form
                    headline1='Welcome,'
                    headline2={`${user.firstName}!`}
                    text='You have been registered for this awesome service. Please check your email listed below for instructions.'
                    buttonLabel='Sign In'
                >
                    <div className='email'>
                        {user.email}
                    </div>
                </Form>
            </div>
        );
    }
}
