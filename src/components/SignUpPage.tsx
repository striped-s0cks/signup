import { PrimaryButton, TextField } from 'office-ui-fabric-react';
import * as React from 'react';

export interface DispatchProps {
    createUser(firstName: string, email: string, password: string): void;
}

interface State {
    firstName: string;
    email: string;
    password: string;
}

export class SignUpPage extends React.Component<DispatchProps, State> {
    constructor(props: DispatchProps) {
        super(props);

        this.state = {
            firstName: '',
            email: '',
            password: '',
        };
    }

    private _createUser(): void {
        this.props.createUser(
            this.state.firstName,
            this.state.email,
            this.state.password,
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
                <div className='header'>Let's Sign Up</div>
                <div className='help'>Use the form below to sign up for this super  awesome service. You're only a few steps away!</div>

                <TextField
                    required
                    label='First Name'
                    value={this.state.firstName}
                    onChange={(_ev, firstName = '') => this.setState({firstName})}
                />

                <TextField
                    required
                    label='Email Address'
                    value={this.state.email}
                    onChange={(_ev, email = '') => this.setState({email})}
                />

                <TextField
                    required
                    label='Password'
                    value={this.state.password}
                    onChange={(_ev, password = '') => this.setState({password})}
                />

                <PrimaryButton
                    label='Sign Up'
                    disabled={this._isFormComplete()}
                    onClick={this._createUser}
                />
            </div>
        );
    }
}