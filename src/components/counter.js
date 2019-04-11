import React, {useState} from 'react';

// Import button component
import Button from './button';

// Simple counter using React Hooks
const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<Button onClick={() => setCount(count + 1)}>Click me!</Button>
			<p>You clicked the button {count === 1 ? 'once' : `${count} times`}.</p>
		</>
	);
};

export default Counter;
