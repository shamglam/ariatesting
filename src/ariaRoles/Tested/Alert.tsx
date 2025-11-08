import React, { useState } from 'react';

export const Alert = () => {
	const [alerts, setAlerts] = useState([{ id: Date.now(), text: 'Initial alert message.' }]);

	const addAlert = () => {
		setAlerts(a => [...a, { id: Date.now(), text: `Alert message ${a.length + 1}.` }]);
	};

	return (
		<div lang="en">
			<button lang="en" type="button" onClick={addAlert}>Generate Alert - this will not respect the lang attribute in windows narrator and the alert will be read immediadelty</button>
			{alerts.map(al => (
				<div lang="en" key={al.id} role="alert">{al.text}</div>
			))}
		</div>
	);
};
