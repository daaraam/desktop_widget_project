import React from 'react';
import Calendar from './Page/Calendar.jsx';
import Timer from './Page/Timer.jsx';
import TodoPage from './Page/TodoPage.jsx';
import Watch from './Page/Watch.jsx';
import Weather from './Page/Weather.jsx';

export default function App() {
	return (
		<div className="flex flex-col w-4/6 gap-y-5">
			<section className="flex justify-center w-5/6 gap-x-8">
				<Weather />
				<Watch />
				<Calendar />
			</section>
			<section className="flex gap-x-2">
				<Timer />
				<TodoPage />
			</section>
		</div>
	);
}
