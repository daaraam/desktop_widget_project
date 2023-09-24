import axios from 'axios';
import React, { useEffect, useState } from 'react';
import WeatherBox from '../Components/WeatherBox';
import weatherDescKo from '../Components/weatherDescKo';
import { WatchAndCalendarAndWeatherPage } from './Watch';

export default function Weather() {
	const API_KEY = process.env.REACT_APP_WEATHER_KEY;
	const [weather, setWeather] = useState([]);

	// 위치 정보 가져오기
	const getCurrentLocation = () => {
		navigator.geolocation.getCurrentPosition(position => {
			let lat = position.coords.latitude;
			let lon = position.coords.longitude;
			getWeather(lat, lon);
		});
	};

	useEffect(() => {
		getCurrentLocation();
	}, []);

	// 해당 위치 날씨 정보 가져오기
	const getWeather = async (lat, lon) => {
		try {
			const res = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
			);

			// 아이콘 가져오기
			const weatherIcon = res.data.weather[0].icon;
			const weatherIcons = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
			const cityName = res.data.name;
			const temp = res.data.main.temp;

			// 날씨 설명 가져오기
			const weatherId = res.data.weather[0].id;
			const weatherDescription = weatherDescKo.find(item => Object.keys(item)[0] == weatherId);
			let description = '';
			if (weatherDescription) {
				description = Object.values(weatherDescription)[0];
				console.log(description);
			} else {
				console.log('일치하는 날씨 설명을 찾을 수 없습니다.');
			}

			const RoundTemp = Math.round(temp);

			setWeather([
				{
					description,
					name: cityName,
					temp: RoundTemp,
					icon: weatherIcons,
				},
			]);
		} catch (error) {
			console.error('날씨 정보를 가져오는 동안 오류가 발생했습니다.:', error);
		}
	};

	return (
		<WatchAndCalendarAndWeatherPage>
			{weather.map((weather, index) => (
				<WeatherBox key={index} weather={weather} />
			))}
		</WatchAndCalendarAndWeatherPage>
	);
}
