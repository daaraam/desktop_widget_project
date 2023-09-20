import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import Modal from 'react-modal';
import uuid from 'react-uuid';
import styled from 'styled-components';
import plusBtn from '../Image/plusBtn.png';

export default function NewTodoModal({ todos, setTodos }) {
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
				<h2 className="font-bold text-2xl flex justify-center relative">Create New Task</h2>
				<button className="absolute right-5 top-3 p-1 rounded-full hover:bg-red-500" onClick={ModalCloser}>
					<GrClose />
				</button>
				<form className="flex flex-col gap-y-3 pt-5" onSubmit={addButtonHandler}>
					<TodoInput placeholder="write new task..." value={write} onChange={e => setWrite(e.target.value)} />
					<TodoButton onClick={addButtonHandler}>Create Task</TodoButton>
				</form>
			</Modal>
		</div>
	);
}

const TodoInput = styled.input`
	display: flex;
	justify-content: start;
	padding: 1rem;
	width: 18.875rem;
	height: 10.375rem;
	border-radius: 0.5rem;
	border: 0.8px solid #2f80ed;
	background: #fff;
	box-shadow: 0px 4px 6px 3px rgba(45, 83, 219, 0.1);
	:hover& {
		border: 0.8px solid #fb63a3;
	}
`;

const TodoButton = styled.button`
	border-radius: 0.5rem;
	background: #32abef;
	width: 18.875rem;
	height: 3rem;
	flex-shrink: 0;
	color: white;
	font-size: 1.3rem;
	font-weight: 900;
	:hover& {
		background-color: #fb63a3;
	}
`;
