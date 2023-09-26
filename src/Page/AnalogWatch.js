import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import clockFrame from '../Image/clockFrame.png';

function AnalogClock() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	const hours = time.getHours() % 12;
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();

	const hourDegrees = (hours * 30 + minutes / 2) % 360;
	const minuteDegrees = (minutes * 6 + seconds / 10) % 360;

	return (
		<ClockContainer>
			<ClockFrame src={clockFrame} alt="clockFrame" />
			<ClockFace>
				<HourHand style={{ transform: `rotate(${hourDegrees}deg)` }} />
				<MinuteHand style={{ transform: `rotate(${minuteDegrees}deg)` }} />
			</ClockFace>
		</ClockContainer>
	);
}

const ClockContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 300px;
`;

const ClockFrame = styled.img`
	position: absolute;
	width: 180px;
	height: 180px;
	filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.25)) drop-shadow(-10px -10px 20px #fff);
	margin-top: 1.5rem;
	border-radius: 50%;
`;

const ClockFace = styled.div`
	position: relative;
	width: 180px;
	height: 180px;
	margin-top: 1.5rem;
	border-radius: 50%;
`;

const Hand = styled.div`
	position: absolute;
	top: 0%;
	left: 49%;
	transform-origin: 0% 50%;
	transform: translateX(-50%) translateY(-50%);
	background-color: black;
	transition: transform 0.5s ease-in-out;
`;

const HourHand = styled(Hand)`
	position: absolute;
	width: 6px;
	height: 50px;
	transform-origin: 50% 100%;
	border-radius: 3rem;
	top: 40px;
`;

const MinuteHand = styled(Hand)`
	position: absolute;
	width: 6px;
	height: 70px;
	transform-origin: 50% 100%;
	background-color: var(--color-pink);
	border-radius: 3rem;
	top: 22px;
`;

export default AnalogClock;
