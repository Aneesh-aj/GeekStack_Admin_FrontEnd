
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';


import businessModalReducer from '../slice/businnessModalSlice'; 


const sectionPersistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  sectionStorage: persistReducer(sectionPersistConfig, businessModalReducer),
});

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
