import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Counter from './counter';

test('It should start the counter at 0', () => {
	const {getByText} = render(<Counter/>);
	expect(getByText('You clicked the button 0 times.')).toBeInTheDocument();
});

test('It should display the text \'You clicked the button once.\' after the button is clicked once', () => {
	const {getByText} = render(<Counter/>);
	const node = getByText('Click me!');
	fireEvent.click(node);
	expect(getByText('You clicked the button once.')).toBeInTheDocument();
});

test('It should display the numerical number of clicks after the button is clicked more than once', () => {
	const {getByText} = render(<Counter/>);
	const node = getByText('Click me!');
	fireEvent.click(node);
	fireEvent.click(node);
	fireEvent.click(node);
	expect(getByText('You clicked the button 3 times.')).toBeInTheDocument();
});
