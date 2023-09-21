import React from 'react';
import styled from 'styled-components';

export default function Watch() {
	return <WatchAndCalendarAndWeatherPage>Watch</WatchAndCalendarAndWeatherPage>;
}

export const WatchAndCalendarAndWeatherPage = styled.div`
	width: 15rem;
	height: 30vh;
	overflow-y: scroll;
	border-radius: 40px;
	background: var(--color-gray);
	display: flex;
	flex-direction: column;
	position: relative;
`;
