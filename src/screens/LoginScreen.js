import React, { useState } from 'react';
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';

function LoginScreen() {
  const [singIn, setSingIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src="images/login_logo.png" alt="" />
        <button onClick={() => {setSingIn(true)}} className="loginScreen__button">Sign In</button>

        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {singIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere, Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your memebership.</h3>

            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Eamil Address" />
                <button onClick={() => {setSingIn(true)}} className="loginScreen__getStarted">GET STARTED</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
