import { PrimaryButton } from 'office-ui-fabric-react';
import * as React from 'react';

import './Form.scss';

interface Props {
    headline1: string;
    headline2: string;
    text: string;
    buttonLabel: string;
    isButtonDisabled?: boolean;
    onClick?: () => void;
}

export class Form extends React.Component<Props> {
    render() {
        return (
            <div className='form'>
                <div className='header'>
                    {this.props.headline1}
                    <span className='bold'>{this.props.headline2}</span>
                </div>

                <div className='text'>{this.props.text}</div>

                {this.props.children}

                <PrimaryButton
                    text={this.props.buttonLabel}
                    disabled={this.props.isButtonDisabled}
                    onClick={this.props.onClick}
                />
            </div>
        );
    }
}