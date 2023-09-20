import { GrClose } from 'react-icons/gr';
import styled from 'styled-components';

import Switch from './Switch';
import './Switch.css';

const TodoItem = ({ item, onDelete, statusUpdate }) => {
	const { id, text, status } = item;

	const statusChangeHandler = e => {
		const newStatus = e.target.checked ? 'Completed' : 'Active';
		statusUpdate(id, newStatus);
	};

	return (
		<div>
			<li className="flex gap-3 py-2 justify-center">
				<List>
					<p>{text}</p>
					<Switch id={id} status={status} statusChangeHandler={statusChangeHandler} />
				</List>

				<DeleteBtn onClick={() => onDelete(id)}>
					<GrClose size={15} />
				</DeleteBtn>
			</li>
		</div>
	);
};

export default TodoItem;

const List = styled.li`
	display: flex;
	align-items: center;
	border-radius: 0.6rem;
	width: 80%;
	height: 4rem;
	background: rgba(251, 99, 163);
	background: linear-gradient(311deg, rgba(249, 209, 226, 1) 4%, rgba(251, 99, 163, 1) 100%);
	color: white;
	font-weight: 500;
	font-size: 1.2rem;
	padding: 1rem;
	justify-content: space-between;
`;

const DeleteBtn = styled.button`
	background-color: var(--color-accent);
	border-radius: 100%;
	cursor: pointer;
	outline: none;
	border: none;
	display: flex;
	align-items: center;
	:hover {
		transition: all 300ms ease-out;
		transform: rotate(-25deg);
	}
`;
