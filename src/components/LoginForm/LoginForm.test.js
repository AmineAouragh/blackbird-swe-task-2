import { render, fireEvent } from '@testing-library/react';
import LoginForm from '.';

test('renders sign in page', () => {
    const { getByText } = render(<LoginForm />);
    const signInText = getByText("Sign in");
    expect(signInText).toBeInTheDocument();
});

// Add more unit test here


test('password is valid', () => {
    const { getByTestId } = render(<LoginForm />)
    const passwordInput = getByTestId('password-input')
    fireEvent.change(passwordInput, { target: { value: 'MICHAEL@corleone1974' }})
    const regexPattern = /([a-z][A-Z][0-9][-_*.%!&#@]){8,}/
    expect(passwordInput.value).toMatch(regexPattern)
})