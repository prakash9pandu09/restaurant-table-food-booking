import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logIn, logout } from '../../features/userSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(logIn(false));
    dispatch(logout());
    history.push('/');
  }, [history]);
  return <div>Logout...</div>;
};

export default Logout;
