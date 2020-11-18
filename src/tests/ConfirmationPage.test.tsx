import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { App } from '../App';

let container: HTMLElement;

beforeEach(() => {
    container = render(<App />).container;
});

test('redirects to confirm', async () => {
    const firstName = 'Obi-Wan';
    const email = 'kenobi@jedi.com';

    fireEvent.change(screen.getByLabelText('First Name'), { target: { value: firstName}});
    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: email}});
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'general'}});

    const signUpButton = screen.getAllByText('Sign Up')[1];
    expect(signUpButton.closest('button')).not.toBeDisabled();
    fireEvent.click(signUpButton);

    // redirect
    expect(container.querySelector('.SignUpPage')).not.toBeInTheDocument();
    expect(container.querySelector('.ConfirmationPage')).toBeInTheDocument();
    expect(screen.getByText(`${firstName}!`)).toBeInTheDocument();
    expect(screen.getByText(email)).toBeInTheDocument();

    const signInButton = screen.getByText('Sign In').closest('button');
    expect(signInButton).toBeInTheDocument();
    expect(signInButton).not.toBeDisabled();
});
