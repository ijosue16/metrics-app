import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

const Details = () => {
  const pick = useSelector((state) => state.Pickedcity);
  const [slktCt] = useSelector((state) => state.Weather.filter((item) => item.address === pick));

  const changeDate = () => {
    const getdate = new Date();
    const resp = new Date(getdate.setDate(getdate.getDate()));
    const day = String(resp.getDate()).padStart(2, '0');
    const month = String(resp.getMonth() + 1).padStart(2, '0');
    const year = resp.getFullYear();
    return `${year}-${month}-${day}`;
  };
  const convertTime = () => {
    const day = new Date(changeDate());
    return day.toString().split(' ')[0];
  };
  return (
    <>
      {slktCt ? (
        <div className="container-fluid p-0 border border-0 details-page">
          <div className="card m-0 d-flex flex-row   border border-0 details-global">
            <div className=" d-flex flex-fill align-items-center justify-content-start details-global">
              <span className="d-flex p-2">
                TODAY WEATHER FORECAST
                <br />
                IN DETAILS
              </span>
            </div>
            <div className="card-body d-flex flex-column p-2 align-items-end details-global details  flex-fill border border-0 ">
              <h6 className="m-0 p-0 flex-fill  global-dtl">{convertTime()}</h6>
              <div className=" d-flex flex-column   flex-fill align-items-end justify-content-end">
                <h5 className="flex-wrap global-dtl">
                  {slktCt.resolvedAddress}
                </h5>
                <p className="m-0  global-dtl ">
                  {slktCt.days[0].temp}
                  °C
                </p>
              </div>
            </div>
          </div>
          <h6 className="py-1  container-fluid m-0 d-flex justify-content-start sub-head text-white ">
            {' '}
            {slktCt.address}
            {' '}
            weather breakdown
          </h6>
          <ul className="list-group border-0 p-0  border border-0 wee">
            <li className="list-group-item d-flex border border-0 justify-content-between">
              <span className="flex-fill d-flex justify-content-start ">
                temperature
              </span>
              <span className="flex-fill d-flex justify-content-end">
                {slktCt.days[0].temp}
                °C
              </span>
            </li>
            <li className="list-group-item d-flex border border-0 justify-content-between">
              <span className="flex-fill d-flex justify-content-start">
                humidity
              </span>
              <span className="flex-fill d-flex justify-content-end">
                {slktCt.days[0].humidity}
              </span>
            </li>
            <li className="list-group-item d-flex border border-0 justify-content-between">
              <span className="flex-fill d-flex justify-content-start">
                windspeed
              </span>
              <span className="flex-fill d-flex justify-content-end">
                {slktCt.days[0].windspeed}
              </span>
            </li>
            <li className="list-group-item d-flex border border-0">
              <span className="flex-fill d-flex justify-content-start">
                solarradiation
              </span>
              <span className="flex-fill d-flex justify-content-end">
                {slktCt.days[0].solarradiation}
              </span>
            </li>
            <li className="list-group-item d-flex border border-0">
              <span className="flex-fill d-flex justify-content-start">
                solarenergy
              </span>
              <span className="flex-fill d-flex justify-content-end">
                {slktCt.days[0].solarenergy}
              </span>
            </li>
            <li className="list-group-item d-flex border border-0">
              <span className="flex-fill d-flex justify-content-start">
                sunrise
              </span>
              <span className="flex-fill d-flex justify-content-end">
                {slktCt.days[0].sunrise}
              </span>
            </li>
            <li className="list-group-item d-flex border border-0">
              <span className="flex-fill d-flex justify-content-start">
                pressure
              </span>
              <span className="flex-fill d-flex justify-content-end">
                {slktCt.days[0].pressure}
              </span>
            </li>
            <li className="list-group-item d-flex border border-0">
              <span className="flex-fill d-flex justify-content-start">
                icon
              </span>
              <span className="flex-fill d-flex justify-content-end">
                {slktCt.days[0].icon}
              </span>
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
export default Details;
