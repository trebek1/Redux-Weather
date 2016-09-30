import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

// this created this.props.weather in the app. 
const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
