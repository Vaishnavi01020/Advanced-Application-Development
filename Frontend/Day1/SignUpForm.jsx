import React, { useState } from 'react';
import Confetti from 'react-confetti'; // Import the Confetti component
import '../assets/css/SignUpForm.css'; // Import your CSS file
import img from '../assets/images/image1.jpg';

function SignUpForm() {
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className={`container ${isSignIn ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
         
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button >Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button onClick={toggleForm} style={{}}>Sign In</button> {/* Call toggleForm on button click */}
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left" style={{ color: 'black' }}>
            <img src={img} alt="Sign Up Image" className="signup-image" />
            <button className="ghost" onClick={toggleForm}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <img src={img} alt="Sign Up Image" className="signup-image" />
            <button className="ghost" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black' }} onClick={toggleForm}>Sign Up</button>
          </div>
        </div>
        {(isSignIn || !isSignIn) && <Confetti />} {/* Render Confetti component when isSignIn is true or false */}
      </div>
    </div>
  );
}

export default SignUpForm;
