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
			<li className="flex justify-center gap-3 py-2">
				<List>
					<TodoText>{text}</TodoText>
					<Switch id={id} status={status} statusChangeHandler={statusChangeHandler} />
				</List>

				<DeleteBtn onClick={() => onDelete(id)}>
					<GrClose size={20} />
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
	background: var(--color-pink);
	background: linear-gradient(311deg, rgba(249, 209, 226, 1) 4%, rgba(251, 99, 163, 1) 100%);
	color: white;
	font-weight: 500;
	font-size: 1.2rem;
	padding: 1rem;
	justify-content: space-between;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1) inset, 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
`;
const TodoText = styled.p`
	width: 12rem;
	white-space: pre-line;
	word-break: break-all;
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
