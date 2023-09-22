import React from 'react';
import styled from 'styled-components';

export default function BigCalendar() {
	return <BigCalendarPage>BigCalendar</BigCalendarPage>;
}

export const BigCalendarPage = styled.div`
	width: 70rem;
	height: 92vh;
	overflow-y: scroll;
	border-radius: 40px;
	background: var(--color-gray);
	display: flex;
	flex-direction: column;
	position: relative;
`;
