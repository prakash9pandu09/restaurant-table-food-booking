import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrders } from '../../features/ordersSlice';
import {
  removeReservation,
  getAllReservations,
} from '../../features/reservationSlice';

const ReservedUser = () => {
  const reservations = useSelector(getAllReservations);
  const dispatch = useDispatch();
  return (
    reservations &&
    reservations.map((r, i) => {
      return (
        <div
          className="reservedCustomerCard"
          key={i}
          onClick={() => {
            dispatch(removeReservation(i));
            dispatch(addOrders({ userName: r, id: i, food: [] }));
          }}
        >
          <div className="reservedCustomerNameCard">{r}</div>
        </div>
      );
    })
  );
};

export default ReservedUser;
