import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { Provider } from 'react-redux';

import businessModalReducer from '../slice/businessModalSlice'; 
import adminReducer from "../slice/adminSlice";

const sectionPersistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  businessModal: businessModalReducer,
  adminData: adminReducer,
});

const persistedReducer = persistReducer(sectionPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
