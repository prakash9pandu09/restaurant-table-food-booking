import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservedCustomers: [],
};
const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addReservation: (state, action) => {
      state.reservedCustomers.push(action.payload);
    },
    removeReservation: (state, action) => {
      state.reservedCustomers.splice(action.payload, 1);
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;
export const getAllReservations = (state) =>
  state.reservation.reservedCustomers;
export default reservationSlice.reducer;
