import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logIn } from '../../features/userSlice';
import "./home.css";

const Home = ({ loggedIn }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (loggedIn) {
      history.push('/reservations');
    } else {
      history.push('/');
    }
  }, [loggedIn, history]);
  return (
    <div className="welcomeHomeContainer">
      <div className="welcomeHomeText">Welcome to JJ Foods</div>
      <div className="welcomeHomeLogin">
        <button
          onClick={() => {
            dispatch(logIn(true));
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
