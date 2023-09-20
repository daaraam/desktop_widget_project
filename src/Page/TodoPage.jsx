import React, { useState } from 'react';
import styled from 'styled-components';
import TodoList from '../Components/TodoList';

export default function TodoPage() {
	const filters = ['All', 'Active', 'Completed'];
	const [filter, setFilter] = useState(filters[0]);

	return (
		<Todo>
			<TodoTap>
				{filters.map((value, index) => (
					<span key={index} onClick={() => setFilter(value)}>
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
	border-radius: 40px;
	background: #f0f5f8;
	margin: 5rem;
	display: flex;
	flex-direction: column;
	position: relative;
`;

const TodoTap = styled.div`
	margin: 2rem 1.25rem 0 1.25rem;
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	gap: 5rem;
	width: 21rem;
	height: 3rem;
	flex-shrink: 0;
	border-radius: 0.5rem;
	background: #ffffff;
	box-shadow: 10px 10px 20px 0px rgba(164, 164, 164, 0.25), -10px -10px 20px 0px rgba(255, 255, 255, 0.67);
`;
