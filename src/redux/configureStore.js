import { applyMiddleware, combineReducers, legacy_createStore as createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { pickedCityReducer, weatherReducer } from './weather';

const rootReducer = combineReducers({
  Weather: weatherReducer,
  Pickedcity: pickedCityReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
