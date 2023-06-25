"use client"
import React from 'react'
import { store } from './store';
import { Provider } from 'react-redux';
import {PersistGate} from "redux-persist/integration/react"
import { persistStore } from 'redux-persist';

const ReduxProvider = ({children}) => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider