import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PropTypes } from 'prop-types';
import City from './city';

const Cities = (props) => {
  const { weatherInfo } = props;
  return (
    <>
      <div className="container-fluid text-center p-0">
        <h6 className="py-1  container-fluid m-0 d-flex justify-content-start sub-head  global-dtl"> select city</h6>
        <div className="row row-cols-2 row-cols-md-4 container-fluid m-0 p-0 city-container ">

          {
          weatherInfo.map((city) => (
            <City
              key={city.address}
              city={city.address}
              temp={city.days[0].temp}
              conditions={city.days[0].conditions}
            />
          ))
          }
        </div>
      </div>
    </>
  );
};
Cities.propTypes = {
  weatherInfo: PropTypes.instanceOf(Array).isRequired,
};

export default Cities;
