import React from 'react';

// MarkRole: non-standard experimental role placeholder. Now supports children so
// highlighted inline content can be passed through. If no children provided, renders nothing visible.
export const MarkRole = ({ children }) => (
	<div role="mark">
	<p aria-hidden="true">Leses som Fremhevet</p>	{children}
	</div>
); // Non-standard
    