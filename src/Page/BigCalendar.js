import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import { useDate } from '../Context/DateContext';
import pink from '../Image/pink.png';
import './Calendar.css';

export default function BigCalendar() {
	const { date } = useDate();
	const curDate = new Date();
	const formatDate = date => {
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');
		return `${year}-${month}-${day}`;
	};

	const [value, onChange] = useState(curDate);

	const addContent = ({ date }) => {
		const contents = [];
		const dateString = formatDate(date);
		if (dateString && dateIsInList(dateString)) {
			contents.push(<img src={pink} width="26" height="26" alt="check" />);
		}
		return contents;
	};

	const dateIsInList = dateString => {
		return date.includes(dateString);
	};

	return (
		<BigCalendarPage>
			<h1 className="text-5xl font-extrabold pt-11">2023 Calendar</h1>
			<Calendar
				onChange={onChange}
				value={value}
				tileContent={addContent}
				className="flex flex-col items-center justify-center h-full"
			/>
		</BigCalendarPage>
	);
}

const BigCalendarPage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 420px;
	height: 500px;
	overflow-y: scroll;
	border-radius: 40px;
	background: var(--color-white);
	display: flex;
	flex-direction: column;
	position: relative;
	filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.25)) drop-shadow(-10px -10px 20px #fff);
`;
