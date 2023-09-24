import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import timeFace from '../Image/timerFace.png';
import AnalogWatch from './AnalogWatch';

export default function Watch() {
	const [time, setTime] = useState(new Date());
	const [isDigital, setIsDigital] = useState(true);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	const hours = time.getHours().toString().padStart(2, '0');
	const minutes = time.getMinutes().toString().padStart(2, '0');

	const toggleWatch = () => {
		setIsDigital(!isDigital);
	};

	return (
		<WatchAndCalendarAndWeatherPage>
			<WatchTap>
				<span className={isDigital ? 'Clicked' : 'unClicked'} onClick={toggleWatch}>
					Digital
				</span>
				<span className={!isDigital ? 'Clicked' : 'unClicked'} onClick={toggleWatch}>
					Analog
				</span>
			</WatchTap>

			{isDigital ? (
				<WatchBoard>
					<img src={timeFace} alt="digital" className="flex items-center justify-center w-full" />
					<DigitalTime>
						<p>{hours}:</p>
						<p>{minutes}</p>
					</DigitalTime>
				</WatchBoard>
			) : (
				<AnalogWatch />
			)}
		</WatchAndCalendarAndWeatherPage>
	);
}

export const WatchAndCalendarAndWeatherPage = styled.div`
	width: 15rem;
	height: 15rem;
	overflow-y: scroll;
	border-radius: 40px;
	background: var(--color-pink);
	display: flex;
	flex-direction: column;
	position: relative;
	overflow: hidden;
`;

const WatchTap = styled.div`
	margin: 1.1rem 0.5rem -2rem 0.5rem;
	width: 14rem;
	height: 3rem;
	font-weight: 900;
	font-size: 1.2rem;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 0.5rem;
	background: var(--color-white);
	box-shadow: 10px 10px 20px 0px rgba(164, 164, 164, 0.25), -10px -10px 20px 0px rgba(255, 255, 255, 0.67);
`;
export const WatchBoard = styled.span`
	width: 15rem;
	height: 15rem;
	padding: 1rem;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const DigitalTime = styled.p`
	display: flex;
	position: absolute;
	top: 53px;
	left: 19px;
	font-size: 4rem;
	color: white;
	font-weight: 900;
	letter-spacing: 13px;
	font-family: 'IAMAPLAYER';
`;
