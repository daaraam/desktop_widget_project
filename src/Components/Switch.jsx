import React from 'react';
import './Switch.css';

const Switch = ({ statusChangeHandler, id, status }) => {
	return (
		<>
			<input
				className="react-switch-checkbox"
				id={`react-switch-new-${id}`}
				type="checkbox"
				checked={status === 'Completed'}
				onChange={statusChangeHandler}
			/>

			<label
				className={status === 'Active' ? 'active-label' : 'completed-label'}
				htmlFor={`react-switch-new-${id}`}
			>
				<span className={`react-switch-button`} />
			</label>
		</>
	);
};

export default Switch;
