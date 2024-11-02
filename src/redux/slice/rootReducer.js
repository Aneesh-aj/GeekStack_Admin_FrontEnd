// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import businessModalReducer, { initialState as businessModalInitialState } from './businessModalSlice';
import adminReducer from './adminSlice';

const appReducer = combineReducers({
  businessModal: businessModalReducer,
  adminData: adminReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_BUSINESS_MODAL') {
    // Reset only the businessModal slice to its initial state
    return {
      ...state,
      businessModal: businessModalInitialState,
    };
  }
  return appReducer(state, action);
};

export default rootReducer;
