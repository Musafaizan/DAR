import React, { useState } from 'react';
import './login.css';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="background"></div>

      <div className="card">
        <div className="logo">
          DARJI <span className="diamond">✦</span>
        </div>

        <h1 className="title">{isLogin ? 'Welcome Back' : 'Join DARJI'}</h1>
        <p className="subtitle">
          {isLogin
            ? 'Log in to continue designing your space with full control.'
            : 'Sign up to experience Kuwait’s first interactive 3D configurator.'}
        </p>

        <form className="form">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="input"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="input"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="input"
            required
          />

          {isLogin && (
            <div className="options">
              <label className="remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot">Forgot password?</a>
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <p className="switch">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="switch-link"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>

        <div className="badge">
          <span className="star">★</span> 1200+ trusted customers
        </div>
      </div>

   
    </div>
  );
};
