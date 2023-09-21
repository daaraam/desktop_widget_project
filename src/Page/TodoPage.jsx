import React, { useState } from 'react';
import styled from 'styled-components';
import TodoList from '../Components/TodoList';
import './TodoPage.css';

export default function TodoPage() {
	const filters = ['All', 'Active', 'Completed'];
	const [filter, setFilter] = useState(filters[0]);

	return (
		<Todo>
			<TodoTap>
				{filters.map((value, index) => (
					<span
						key={index}
						className={filter === value ? `Clicked` : `unClicked`}
						onClick={() => setFilter(value)}
					>
						{value}
					</span>
				))}
			</TodoTap>
			<TodoList filter={filter} />
		</Todo>
	);
}

const Todo = styled.div`
	width: 25rem;
	height: 80vh;
	overflow-y: scroll;
	border-radius: 40px;
	background: var(--color-gray);
	margin: 5rem;
	display: flex;
	flex-direction: column;
	position: relative;
`;

const TodoTap = styled.div`
	margin: 2rem 1.25rem 0 1.25rem;
	font-weight: 900;
	font-size: 1.2rem;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	padding-right: 0.5rem;
	padding-left: 0.5rem;
	align-items: center;
	/* gap: 3rem; */
	border-radius: 0.5rem;
	background: #ffffff;
	box-shadow: 10px 10px 20px 0px rgba(164, 164, 164, 0.25), -10px -10px 20px 0px rgba(255, 255, 255, 0.67);
`;
