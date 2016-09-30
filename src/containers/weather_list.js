import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

	renderWeather(cityData){
		console.log(cityData)
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);

		return(
			<tr key={cityData.city.name}>
				<td> {cityData.city.name} </td>
				<td><Chart data={temps} color={'red'} units="K"/></td>
				<td><Chart data={pressure} color={'yellow'} units="KPa"/></td>
				<td><Chart data={humidity} color={'green'} units="%"/></td>
			</tr>
		)

	}

	render(){
		return (

			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature K</th>
						<th>Pressure HPa</th>
						<th>Humidity %</th>
					</tr>
				</thead>
				<tbody>
				{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>

		)
	}

}

function mapStateToProps({weather}){ //map redux state to props not component state 
	return {weather} // === {weather: weather} === {weather: state.weather}
	// state.weather because in combineReducers we called weather: weatherReducer
}

export default connect(mapStateToProps)(WeatherList);


