import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('App.tsx', () => {
    test('renders header', () => {
        render(<App/>);
        const linkElement = screen.getByText(/Planet crafter Calculator/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('renders WIP', () => {
        render(<App/>);
        const linkElement = screen.getByText(/Work in progress!/i);
        expect(linkElement).toBeInTheDocument();
    });
});