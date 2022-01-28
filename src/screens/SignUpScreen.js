import React from 'react';
import './SignUpScreen.css';

function SignUpScreen() {
  const register = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  }

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>Sign In</button>

        <h4>
          <span className='signUpScreen__grey'>New to Netflix? </span>
          <span className='signUpScreen__link' onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
