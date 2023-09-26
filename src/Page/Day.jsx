import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { WatchAndCalendarAndWeatherPage } from './Watch';

export default function Day() {
	const [userInput, setUserInput] = useState('');
	const [targetDate, setTargetDate] = useState(null);
	const [dayText, setDayText] = useState('');
	const [days, setDays] = useState(0);

	useEffect(() => {
		if (userInput) {
			const parsedDate = new Date(userInput);
			setTargetDate(parsedDate);
		}
	}, [userInput]);

	useEffect(() => {
		const today = new Date();
		const timeRemaining = targetDate - today;
		const DAYS = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

		setDays(DAYS);
	}, [targetDate]);

	const addDDay = () => {
		alert('일정이 등록되었습니다.');
		setDayText('');
		setTargetDate(null);
	};

	useEffect(() => {
		localStorage.setItem('DATES', JSON.stringify(days));
	}, [addDDay]);

	return (
		<WatchAndCalendarAndWeatherPage className="p-5 bg-gray">
			<p className="pb-1 text-2xl font-extrabold text-zinc-500">D-DAY</p>
			<input
				type="date"
				value={userInput}
				onChange={e => setUserInput(e.target.value)}
				className="p-1 bg-pink-300 rounded-md"
			/>

			{targetDate && (
				<>
					{days + 1 === 0 ? (
						<DayP className="text-pink-500">D-Day</DayP>
					) : days < 0 ? (
						<DayP>D+{Math.abs(days + 1)}</DayP>
					) : (
						<DayP>D-{days + 1}</DayP>
					)}
					<section className="flex" onSubmit={addDDay}>
						<input
							type="text"
							value={dayText}
							onChange={e => setDayText(e.target.value)}
							placeholder="일정을 적어주세요"
						/>
						<button onClick={addDDay}>확인</button>
					</section>
				</>
			)}
		</WatchAndCalendarAndWeatherPage>
	);
}

const DayP = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 900;
	padding: 1rem;
	font-size: 3rem;
`;
