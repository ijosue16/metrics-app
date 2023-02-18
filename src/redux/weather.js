import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';

const FETCH_WEATHER = 'FETCH_WEATHER';
const PICK_CITY = 'PICK_CITY';

const cities = ['Paris', 'Barcelona', 'Copenhagen', 'Vienna', 'Berlin', 'Lisbon', 'Madrid', 'New York', 'Buenos Aires', 'Montevideo', 'Kampala', 'Budapest', ' Beijing', 'Tripoli', 'Kurkata'];

const fetchoneCityWeather = async (city) => {
  const resp = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/2023-02-17?unitGroup=metric&include=days&key=9XBYDAN3EHGMRUXXB7VHBZYFV&contentType=json`);
  const data = await resp.json();

  return data;
};

export const Getweather = createAsyncThunk(FETCH_WEATHER, async (e, thunkAPI) => {
  const currentState = thunkAPI.getState();

  if (currentState.Weather.length === 0) {
    const weather = [];
    for (let i = 0; i < cities.length; i += 1) {
      const newInfo = fetchoneCityWeather(cities[i]);
      weather.push(newInfo);
    }
    const weatherData = Promise.all(weather);
    return weatherData;
  }
  return currentState.Weather;
});
const INITIAL_STATE = [];
export const weatherReducer = createReducer(INITIAL_STATE, ((builder) => {
  builder
    .addCase(Getweather.fulfilled, ((state, action) => action.payload))
    .addDefaultCase((state) => state);
}));
export const pickCity = createAction(PICK_CITY, (city) => ({
  payload: city,
}));
const PICKED_CITY = null;
export const pickedCityReducer = createReducer(PICKED_CITY, ((builder) => {
  builder
    .addCase(pickCity, ((state, action) => action.payload))
    .addDefaultCase(((state) => state));
}));
