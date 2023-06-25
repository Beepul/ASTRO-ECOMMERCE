import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { productsApi } from './services/products'
import cartReducer from '../redux/features/cartSlice';
import productReducer from '../redux/features/productSlice';
import createwebStorage from "redux-persist/lib/storage/createwebStorage";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { ordersApi } from './services/order';

const createNoopStorage = () => {
  return {
    getIten(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removelten(_key) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== 'undefined' ? createwebStorage('local') : createNoopStorage();

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [ordersApi.reducerPath]: ordersApi.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(productsApi.middleware).concat(ordersApi.middleware)
})

// export const persistor = persistStore(store);
setupListeners(store.dispatch)