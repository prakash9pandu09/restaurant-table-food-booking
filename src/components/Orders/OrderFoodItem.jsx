import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { orderFoodItem } from '../../features/ordersSlice';

const OrderFoodItem = ({ userId }) => {
  const [foodItem, setFoodItem] = useState('');
  const dispatch = useDispatch();
  return (
    <div className="ordersTakeForm">
      <input
        placeholder="Food Item"
        value={foodItem}
        type="text"
        onChange={(e) => setFoodItem(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(orderFoodItem({ id: userId, foodItem }));
          setFoodItem('');
        }}
      >
        Order Item
      </button>
    </div>
  );
};

export default OrderFoodItem;
