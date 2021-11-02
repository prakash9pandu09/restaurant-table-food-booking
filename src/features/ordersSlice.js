import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userOrders: [],
};
const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrders: (state, action) => {
      state.userOrders.push(action.payload);
    },
    orderFoodItem: (state, action) => {
      const { id, foodItem } = action.payload;
      state.userOrders.forEach((p) => {
        if (id === p.id) {
          p.food.push(foodItem);
        }
      });
    },
  },
});

export const { addOrders, orderFoodItem } = ordersSlice.actions;
export const getAllOrders = (state) => state.orders.userOrders;
export default ordersSlice.reducer;
