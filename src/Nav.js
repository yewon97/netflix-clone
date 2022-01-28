import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate(); // useHistory v6부터 바뀜

  const transitionNavBar = () => {
    if(window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          className='nav__logo'
          src="images/logo.png"
          alt="netflix_logo"
        />
        <img
          onClick={() => navigate('/profile')}
          className='nav__avatar'
          src="images/avatar.png"
          alt="netflix_avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
