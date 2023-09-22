import React from 'react';
import { BigCalendarPage } from './Page/BigCalendar.js';
import Calendar from './Page/Calendar.jsx';
import Timer from './Page/Timer.jsx';
import TodoPage from './Page/TodoPage.jsx';
import Watch from './Page/Watch.jsx';
import Weather from './Page/Weather.jsx';

export default function App() {
	return (
		<div className="flex gap-x-11">
			<div className="flex flex-col gap-y-5">
				<section className="flex justify-center w-full gap-x-8">
					<Weather />
					<Watch />
					<Calendar />
				</section>

				<section className="flex gap-x-2">
					<Timer />
					<TodoPage />
				</section>
			</div>
			<BigCalendarPage />
		</div>
	);
}
