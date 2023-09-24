import React from 'react';

const WeatherBox = ({ weather }) => {
	return (
		<div className="flex flex-col items-center justify-center h-full">
			<h1 className="text-3xl font-bold">{weather.name}</h1>
			<img src={weather.icon} alt="날씨 아이콘" className="w-26 h-26" />
			<h2 className="text-2xl">{weather.temp}℃</h2>
			<h2 className="text-lg">{weather.description}</h2>
		</div>
	);
};

export default WeatherBox;
