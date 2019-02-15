import React, {useState} from 'react';
import {hot} from 'react-hot-loader/root';

// Import button component
import Button from './button';

// Simple counter using React Hooks
const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<Button onClick={() => setCount(count + 1)}>Click me!</Button>
			<p>You clicked the button {count} times.</p>
		</>
	);
};

export default hot(Counter);
