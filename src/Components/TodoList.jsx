import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import NewTodoModal from './NewTodoModal';
import TodoItem from './TodoItem';

const TodoList = ({ filter }) => {
	const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

	const delBtnClickHandler = id => {
		const filteredTodo = todos.filter(item => item.id !== id);
		setTodos(filteredTodo);
	};

	const statusUpdateHandler = (id, newStatus) => {
		setTodos(todos.map(item => (item.id === id ? { ...item, status: newStatus } : item)));
	};

	useEffect(() => {
		localStorage.setItem('TODOS', JSON.stringify(todos));
	}, [todos]);

	const filtered = getFilteredItems(todos, filter);
	return (
		<div className="pt-7">
			<ul>
				<li>
					{filtered.map(item => (
						<TodoItem
							key={item.id}
							item={item}
							onDelete={delBtnClickHandler}
							statusUpdate={statusUpdateHandler}
						/>
					))}
				</li>
				<NewTodoModal todos={todos} setTodos={setTodos} />
			</ul>{' '}
		</div>
	);
};
export default TodoList;

const getFilteredItems = (todos, filter) => {
	if (filter === 'All') {
		return todos;
	}
	return todos.filter(item => item.status === filter);
};

const readTodosFromLocalStorage = () => {
	const todos = localStorage.getItem('TODOS');
	return todos
		? JSON.parse(todos)
		: [
				{
					id: uuid(),
					text: `todo를 작성해보세요!`,
					status: 'Active',
				},
		  ];
};
