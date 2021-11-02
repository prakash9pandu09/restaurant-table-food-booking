import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addReservation } from '../../features/reservationSlice';
import ReservedUser from './ReservedUser';
import './reservations.css';

const Reservations = () => {
  const [reserveCustomer, setReserveCustomer] = useState('');
  const dispatch = useDispatch();

  const addCustomerReservation = () => {
    dispatch(addReservation(reserveCustomer));
    setReserveCustomer('');
  };
  return (
    <div className="reservationsContainer">
      <div className="reservationsHeading">Reserve Table at JJ Foods</div>
      <div className="reservationsForm">
        <input
          placeholder="Customer Name"
          className="reservationsInput"
          type="text"
          value={reserveCustomer}
          onChange={(e) => setReserveCustomer(e.target.value)}
          required
        />

        <button className="reservationsButton" onClick={addCustomerReservation}>
          Reserve
        </button>
      </div>
      <div className="reservedCustomersHeading">Reserved Customers</div>
      <div className="reservedCustomersContainer">
        <ReservedUser />
      </div>
    </div>
  );
};

export default Reservations;
