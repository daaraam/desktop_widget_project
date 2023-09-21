import React, { useEffect, useRef, useState } from 'react';
import { BsStopFill } from 'react-icons/bs';
import { VscDebugRestart, VscDebugStart } from 'react-icons/vsc';
import styled from 'styled-components';
import frame from '../Image/frame.png';
import { TodoAndTimerPage } from './TodoPage';

export default function Timer() {
	const [initialMin, setInitialMin] = useState(25);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [count, setCount] = useState(0);
	const [startAndPause, setStartAndPause] = useState(false);

	const intervalRef = useRef(null);

	const timeFormat = () => {
		if (count < 0) {
			initInterval();
			setStartAndPause(!startAndPause);
		} else {
			const min = Math.floor(count / 60);
			const sec = count % 60;
			setMinutes(min);
			setSeconds(sec);
		}
	};
	useEffect(timeFormat, [count]);

	const calTotalSec = () => {
		const totalSec = Number(initialMin) * 60;
		setCount(totalSec);
		setInitialMin(0);
	};

	const countdown = () => {
		setCount(c => c - 1);
	};

	const initInterval = () => {
		clearInterval(intervalRef.current);
		intervalRef.current = null;
	};
	const start = () => {
		if (!startAndPause) {
			if (count === 0) {
				calTotalSec();
			}
			timeFormat();
			intervalRef.current = setInterval(countdown, 1000);
			setStartAndPause(!startAndPause);
		}
	};
	const pauseAndResume = () => {
		if (count === 0) {
			initInterval();
			setStartAndPause(false);
		} else {
			if (startAndPause) {
				initInterval();
			} else {
				intervalRef.current = setInterval(countdown, 1000);
			}
			setStartAndPause(!startAndPause);
		}
	};
	const reset = () => {
		initInterval();
		setCount(0);
		setInitialMin(0);
		setMinutes(0);
		setSeconds(0);
		setStartAndPause(false);
	};

	return (
		<TodoAndTimerPage>
			<TimerTap>
				<TimerBoard>
					<img src={frame} alt="frame" />
					<Time>
						{minutes >= 10 ? minutes : `0${minutes}`}:{seconds >= 10 ? seconds : `0${seconds}`}
					</Time>
				</TimerBoard>
				<section className="flex">
					<MinuteInput type="number" value={initialMin} onChange={e => setInitialMin(e.target.value)} />
					<p className="flex items-center font-bold text-m">min</p>
				</section>
				<div className="flex justify-center w-full px-3 gap-x-5">
					{startAndPause ? (
						<TimerBtn className="bg-black" onClick={pauseAndResume}>
							<BsStopFill size={30} />
						</TimerBtn>
					) : (
						<TimerBtn className="bg-black" onClick={start}>
							<VscDebugStart size={30} />
						</TimerBtn>
					)}
					<TimerBtn className="bg-pink-500" onClick={reset}>
						<VscDebugRestart size={30} />
					</TimerBtn>
				</div>
			</TimerTap>
		</TodoAndTimerPage>
	);
}

const TimerTap = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 80vh;
`;
const TimerBtn = styled.button`
	width: 4.5rem;
	height: 3.5rem;
	color: white;
	border-radius: 1.5rem;
	filter: drop-shadow(10px 10px 20px rgba(31, 31, 31, 0.25)) drop-shadow(-10px -10px 20px rgba(255, 255, 255, 0.25));
	display: flex;
	align-items: center;
	justify-content: center;
	:hover& {
		border: 3px solid white;
	}
`;

const TimerBoard = styled.div`
	position: relative;
`;

const Time = styled.p`
	position: absolute;
	top: 13px;
	left: 87px;
	font-size: 4rem;
	color: white;
	text-align: bet;
	font-weight: 900;
	letter-spacing: 10px;
	font-family: 'IAMAPLAYER';
`;

const MinuteInput = styled.input`
	font-family: 'IAMAPLAYER';
	background-color: var(--color-gray);
	filter: drop-shadow(10px 10px 20px rgba(31, 31, 31, 0.25)) drop-shadow(-10px -10px 20px rgba(255, 255, 255, 0.25));
	padding: 0.5rem;
	width: 5rem;
	border-radius: 1.5rem;
	margin-bottom: 1rem;
	font-size: 1.5rem;
	text-align: center;
`;
