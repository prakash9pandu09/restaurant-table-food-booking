import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import reservationReducer from './../features/reservationSlice';
import ordersReducer from './../features/ordersSlice';
import userReducer from './../features/userSlice';
import storage from 'redux-persist/lib/storage';

const combinedReducer = combineReducers({
  reservation: reservationReducer,
  orders: ordersReducer,
  user: userReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'user/logout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware()],
});

export default store;
