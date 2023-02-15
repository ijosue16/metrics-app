import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { IoIosSettings } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';

const Navbar = () => (
  <nav className="d-flex py-2 container-fluid gap-2 navigation-bar">
    <div className="flex-fill d-flex justify-content-start
    align-items-center"
    >
      <NavLink
        className="text-start text-decoration-none"
        to="/"
      >
        <BsChevronCompactLeft className="text-white" />
      </NavLink>
    </div>
    <div className="flex-fill d-flex justify-content-center
    align-items-center"
    >
      <h5 className="text-center m-0 text-white">Header</h5>
    </div>
    <div className="flex-fill d-flex icons gap-4 gap-sm-5 justify-content-sm-end justify-content-center
    align-items-center"
    >
      <FaMicrophone className="text-white" />
      <IoIosSettings className="text-white" />
    </div>

  </nav>

);
export default Navbar;
