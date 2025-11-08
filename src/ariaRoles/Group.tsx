import React from 'react';

// Group: container role for related widgets or elements.
// Now supports children so nested menu items / controls can be grouped semantically.
export const Group = ({ children }) => {
	return (
		<div role="group">
			{children}
		</div>
	);
};

