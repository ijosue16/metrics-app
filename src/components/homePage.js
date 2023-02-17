import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Search from './search';
import { Getweather } from '../redux/weather';

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Getweather());
  }, [dispatch]);
  const weatherData = useSelector((state) => state.Weather);
  return (
    <>
      <Search weatherInfo={weatherData} />
    </>
  );
};
export default Homepage;
