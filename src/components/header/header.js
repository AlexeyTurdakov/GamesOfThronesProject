import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <h3 className='header-title header-link'>
        <Link to='/'>Game of Thrones Data Base</Link>
      </h3>
      <ul className='header-list'>
        <li className='header-link'>
          <Link to='/characters/'>Characters</Link>
        </li>
        <li className='header-link'>
          <Link to='/houses/'>Houses</Link>
        </li>
        <li className='header-link'>
          <Link to='/books/'>Books</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
