import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders, orderFoodItem } from '../../features/ordersSlice';
import { v4 as uuid } from 'uuid';
import OrderFoodItem from './OrderFoodItem';
import './orders.css';

const Orders = () => {
  const orders = useSelector(getAllOrders);
  return (
    <div className="ordersContainer">
      <div className="ordersHeading">Orders</div>
      <div className="ordersForCustomers">
      {orders &&
        orders.map((o, i) => {
          return (
            <div key={o.userName} className="ordersCustomerCard">
              <div className="ordersCustomerName">{o.userName}</div>
              <div className="ordersCustomerItems">
                {o.food.map((f, i) => (
                  <span key={i} className="ordersCustomerItemName">
                    {f}
                  </span>
                ))}
              </div>
              <OrderFoodItem userId={o.id} />
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Orders;
