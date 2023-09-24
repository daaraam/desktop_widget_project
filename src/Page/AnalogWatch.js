import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { WatchBoard } from './Watch';

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

	const hours = time.getHours();
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();

	// 시, 분, 초 바늘의 회전 각도 계산
	const hourDegrees = (hours % 12) * 30 + minutes / 2;
	const minuteDegrees = minutes * 6 + seconds / 10;
	const secondDegrees = seconds * 6;

	return (
		<WatchBoard>
			<ClockFace>
				{hourDegrees}
				{minuteDegrees}
				{secondDegrees}
			</ClockFace>
		</WatchBoard>
	);
}

const ClockFace = styled.svg`
	width: 150px;
	height: 150px;
	background: pink;
`;

const Hand = styled.line`
	transform-origin: center;
	stroke: black;
	stroke-width: 4;
	transition: transform 0.5s ease-in-out;
`;

const HourHand = styled(Hand)`
	transform: rotate(${props => props.degrees}deg);
	stroke-width: 6;
`;

const MinuteHand = styled(Hand)`
	transform: rotate(${props => props.degrees}deg);
	stroke-width: 4;
`;

const SecondHand = styled(Hand)`
	transform: rotate(${props => props.degrees}deg);
	stroke: red;
	stroke-width: 2;
`;

export default AnalogClock;
