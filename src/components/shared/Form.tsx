import { PrimaryButton } from 'office-ui-fabric-react';
import * as React from 'react';

import './Form.scss';

interface Props {
    headline1: string;
    headline2: string;
    text: string;
    buttonLabel: string;
    disabled?: boolean;
    onClick?: () => void;
}

export class Form extends React.Component<Props> {
    render() {
        return (
            <div className='form'>
                <div className='header'>
                    <div>{this.props.headline1}</div>
                    <div className='bold'>{this.props.headline2}</div>
                </div>

                <div className='text'>{this.props.text}</div>

                <div className='body'>
                    {this.props.children}
                </div>

                <PrimaryButton
                    text={this.props.buttonLabel}
                    disabled={this.props.disabled}
                    onClick={this.props.onClick}
                />
            </div>
        );
    }
}