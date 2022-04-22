import React from 'react';
import { render, screen } from '@testing-library/react';
import { Nav } from './Nav';
import { BrowserRouter } from 'react-router-dom';

test('renders Learn link', () => {
    render(
        <BrowserRouter>
            <Nav />
        </BrowserRouter>,
    );
    const linkElement = screen.getByRole('link', { name: /Learn/ });
    expect(linkElement).toBeInTheDocument();
});

test('renders About link', () => {
    render(
        <BrowserRouter>
            <Nav />
        </BrowserRouter>,
    );
    const linkElement = screen.getByRole('link', { name: /About/ });
    expect(linkElement).toBeInTheDocument();
});
