import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const City = () => {
  /// ///////////aho card  iri ya city ibiragumamo hano!!
  const navigate = useNavigate();
  return (
    <>
      <div
        className="col d-flex flex-column align-items-end bg-opacity-10 details"
      >

        <div className="m-0 p-0 flex-fill ">
          <BsArrowRightCircle onClick={() => navigate('/details')} className="text-white" />
        </div>

        <h6 className="flex-wrap p-0 text-end text-white">country name</h6>
        <p className="m-0 p-0 m-0 tex-end text-white">value details</p>

      </div>
    </>
  );
};

export default City;
