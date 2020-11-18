import { TextField } from 'office-ui-fabric-react';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Paths } from '../../App';
import { Form } from '../shared/Form';

import './SignUpPage.scss';

export interface DispatchProps {
    createUser(firstName: string, email: string, password: string, callback?: () => void): void;
}

interface State {
    firstName: string;
    email: string;
    password: string;
}

export class SignUpPage extends React.Component<DispatchProps & RouteComponentProps, State> {
    constructor(props: DispatchProps & RouteComponentProps) {
        super(props);

        this.state = {
            firstName: '',
            email: '',
            password: '',
        };
    }

    private _createUser = (): void => {
        this.props.createUser(
            this.state.firstName,
            this.state.email,
            this.state.password,
            () => {
                this.props.history.push(Paths.confirmation);
            }
        );
    }

    private _isFormComplete(): boolean {
        return !!(this.state.firstName &&
            this.state.email &&
            this.state.password);
    }

    render() {
        return (
            <div className='SignUpPage'>
                <Form
                    headline1="Let's"
                    headline2='Sign up'
                    text="Use the form below to sign up for this super  awesome service. You're only a few steps away!"
                    buttonLabel='Sign Up'
                    isButtonDisabled={!this._isFormComplete()}
                    onClick={this._createUser}
                >
                    <TextField
                        required
                        borderless
                        label='First Name'
                        value={this.state.firstName}
                        onChange={(_ev, firstName = '') => this.setState({firstName})}
                    />

                    <TextField
                        required
                        borderless
                        label='Email Address'
                        value={this.state.email}
                        onChange={(_ev, email = '') => this.setState({email})}
                    />

                    <TextField
                        required
                        borderless
                        label='Password'
                        value={this.state.password}
                        onChange={(_ev, password = '') => this.setState({password})}
                    />
                </Form>
            </div>
        );
    }
}