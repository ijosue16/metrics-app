import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowRightCircle } from 'react-icons/bs';

const Details = () => (
  <div className="container-fluid p-0 border border-0">
    <div className="card m-0 d-flex flex-row gap-2  border border-0">
      <div className=" d-flex flex-fill align-items-center justify-content-start">
        <span className="d-flex" style={{ width: '5rem' }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/136/136723.png"
            alt=""
            className=" d-flex align-items-center justify-content-center img-fluid flex-fill"
          />
        </span>
      </div>
      <div
        className="card-body d-flex flex-column p-2 align-items-end  details  flex-fill border border-0 "
        style={{ height: '11rem' }}
      >
        <h6 className="m-0 p-0 flex-fill">ayee</h6>
        <div className=" d-flex flex-column   flex-fill align-items-end justify-content-end">
          <h5 className="flex-wrap">country name</h5>
          <p className="m-0  ">value details</p>
        </div>
      </div>
    </div>
    <p className="py-1  container-fluid m-0 d-flex justify-content-start sub-head text-white">
      {' '}
      Town breakdown
    </p>
    <ul className="list-group border-0 p-0  border border-0 wee">
      <li className="list-group-item d-flex border border-0">
        <span className="flex-fill d-flex justify-content-start ">wllh ni soo</span>
        <span className="flex-fill">44</span>
        <span className="flex-fill d-flex justify-content-end"><BsArrowRightCircle /></span>
      </li>
      <li className="list-group-item d-flex border border-0">
        <span className="flex-fill d-flex justify-content-start">wllh ni soo</span>
        <span className="flex-fill">44</span>
        <span className="flex-fill d-flex justify-content-end"><BsArrowRightCircle /></span>
      </li>
      <li className="list-group-item d-flex border border-0">
        <span className="flex-fill d-flex justify-content-start">wllh ni soo</span>
        <span className="flex-fill">44</span>
        <span className="flex-fill d-flex justify-content-end"><BsArrowRightCircle /></span>
      </li>
      <li className="list-group-item d-flex border border-0">
        <span className="flex-fill d-flex justify-content-start">wllh ni soo</span>
        <span className="flex-fill">44</span>
        <span className="flex-fill d-flex justify-content-end"><BsArrowRightCircle /></span>
      </li>
    </ul>
  </div>
);
export default Details;
