import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Cities from './city/citylist';

const Search = (props) => {
  const [searchArea, setssearchArea] = useState('');
  const { weatherInfo } = props;
  const filteredWeatherInfo = weatherInfo.filter((city) => city.address.toLowerCase()
    .includes(searchArea.toLowerCase()));
  const handlesearch = (e) => {
    setssearchArea(e.target.value);
  };

  return (
    <>

      <div className="container-fluid d-flex justify-content-center m-0 px-0 flex-column ">
        <div className="m-0 p-0 search d-flex align-items-center justify-content-between px-2">
          <div className=" d-flex  align-items-center justify-content-start glb">
            <span className="d-flex " />
          </div>
          <input
            type="text"
            placeholder="Search a city"
            className="p-2 m-0 search-bar d-flex
          justify-content-center rounded border-0 text-white "
            onChange={handlesearch}
          />
          <div className=" d-flex flex-column    align-items-end justify-content-end">
            <h5 className="flex-wrap global-dtl">METEO AP PRICISE FORECAST</h5>
          </div>
        </div>
        <div className="d-flex justify-content-center "><Cities weatherInfo={filteredWeatherInfo} /></div>
      </div>

    </>
  );
};
Search.propTypes = {
  weatherInfo: PropTypes.instanceOf(Array).isRequired,
};
export default Search;
