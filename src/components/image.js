import React from 'react';

// Import image
import imgSrc from '../../public/favicon.png';

const Image = () => (
	<img src={imgSrc} alt="⚡" width={20} loading="lazy" decoding="async" draggable={false}/>
);

export default Image;
