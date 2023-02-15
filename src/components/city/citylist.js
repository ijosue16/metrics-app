import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import City from './city';

const Cities = () => (
  <>
    <div className="container-fluid text-center p-0">
      <p className="py-1  container-fluid m-0 d-flex justify-content-start sub-head text-white"> select city</p>
      <div className="row row-cols-2 row-cols-md-4 container-fluid m-0 p-0 city-container">
        <City />
        <City />
        <City />
        <City />
      </div>
    </div>
  </>
);
export default Cities;
