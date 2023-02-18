import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { pickCity, Getweather } from '../../redux/weather';

const City = (props) => {
  const { city, temp, conditions } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(pickCity(city));
    dispatch(Getweather());
    navigate('/details');
  };

  return (
    <>
      <div
        className="col d-flex flex-column align-items-end bg-opacity-10 details"
      >

        <div className="m-0 p-0 flex-fill ">
          <BsArrowRightCircle onClick={handleClick} className="city-dtl" />
        </div>

        <h3 className="flex-wrap p-0 text-end fw-bold m-0 city-dtl">{city}</h3>
        <p className="m-0 p-0 m-0 tex-end city-dtl ">{conditions}</p>
        <p className="m-0 p-0 m-0 tex-end city-dtl fw-bold">
          {temp}
          °C
        </p>
      </div>
    </>
  );
};
City.propTypes = {
  city: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  conditions: PropTypes.string.isRequired,
};
export default City;
