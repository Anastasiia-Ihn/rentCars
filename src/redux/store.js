import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filterCars/filterCarsSlice.js';
import { carsReducer } from './cars/carsSlice.js';

const persistConfig = {
  key: 'filters',
  storage,
  // blacklist: ['cars'],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filtersCars: persistReducer(persistConfig, filterReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
