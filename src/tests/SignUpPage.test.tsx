import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { App } from '../App';

let container: HTMLElement;

beforeEach(() => {
    container = render(<App />).container;
});

test('renders inputs', () => {
    expect(container.querySelector('.SignUpPage')).toBeInTheDocument();

    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Email Address')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();

    const button = screen.getAllByText('Sign Up')[1].closest('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
});

test('updates first name', () => {
    const input = screen.getByLabelText('First Name');
    const value = 'Obi-Wan';
    fireEvent.change(input, { target: { value }});
    expect(input.closest('input')?.value).toBe(value);
});

test('updates email address', () => {
    const input = screen.getByLabelText('Email Address');
    const value = 'kenobi@jedi.com';
    fireEvent.change(input, { target: { value }});
    expect(input.closest('input')?.value).toBe(value);
});

test('updates password', () => {
    const input = screen.getByLabelText('Password');
    const value = 'general';
    fireEvent.change(input, { target: { value }});
    expect(input.closest('input')?.value).toBe(value);
});
