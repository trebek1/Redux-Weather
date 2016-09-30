import axios from 'axios';

const API_KEY = '32164d9c4c1358379509b682fd35226a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
// template strings in ES6 

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url); 

	// middleware allows request to finish before sending off action (async -> sync);
	console.log("?? ", FETCH_WEATHER);
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}

