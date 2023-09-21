import React, { useRef, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import Modal from 'react-modal';
import uuid from 'react-uuid';
import styled from 'styled-components';
import plusBtn from '../Image/plusBtn.png';

export default function NewTodoModal({ todos, setTodos }) {
	const textarea = useRef();
	const handleResizeHeight = () => {
		textarea.current.style.height = 'auto';
		textarea.current.style.height = textarea.current.scrollHeight + 'px';
	};
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
		},
	};
	const [modalOpen, setModalOpen] = useState(false);

	const ModalOpener = () => {
		setModalOpen(true);
	};
	const ModalCloser = () => {
		setModalOpen(false);
	};

	const [write, setWrite] = useState('');
	const addButtonHandler = event => {
		event.preventDefault();
		const newTodo = {
			id: uuid(),
			text: write,
			status: 'Active',
		};
		if (write.trim() === '') {
			return;
		}
		setTodos([...todos, newTodo]);
		setWrite('');
		ModalCloser();
	};

	return (
		<div className="relative">
			<img src={plusBtn} alt="plusBtn" onClick={ModalOpener} className="absolute right-1" />

			<Modal isOpen={modalOpen} onRequestClose={ModalCloser} style={customStyles} contentLabel="Example Modal">
				<h2 className="relative flex justify-center text-2xl font-bold">Create New Task</h2>
				<button className="absolute p-1 rounded-full right-5 top-3 hover:bg-pink-500" onClick={ModalCloser}>
					<GrClose />
				</button>
				<form className="grid items-center pt-5 grid-cols gap-y-3" onSubmit={addButtonHandler}>
					<TodoInput
						type="textarea"
						placeholder="write new task..."
						value={write}
						onChange={e => setWrite(e.target.value)}
					/>
					<TodoButton onClick={addButtonHandler}>Create Task</TodoButton>
				</form>
			</Modal>
		</div>
	);
}

const TodoInput = styled.textarea`
	display: flex;
	padding: 1rem;
	width: 18rem;
	height: 10rem;
	border-radius: 0.5rem;
	border: 0.8px solid var(--color-blue);
	background: var(--color-white);
	box-shadow: 0px 4px 6px 3px rgba(45, 83, 219, 0.1);
	:hover& {
		border: 0.8px solid var(--color-pink);
	}
`;

const TodoButton = styled.button`
	border-radius: 0.5rem;
	background: #32abef;
	width: 18rem;
	height: 3rem;
	flex-shrink: 0;
	color: var(--color-white);
	font-size: 1.3rem;
	font-weight: 900;
	:hover& {
		background-color: var(--color-pink);
	}
`;
