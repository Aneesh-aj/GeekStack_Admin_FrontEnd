// clearReduxStore.js
import { persistor, store } from '../redux/store/store';

export const clearBusinessModal = () => {
  persistor.purge();

  store.dispatch({ type: 'CLEAR_BUSINESS_MODAL' });
};
