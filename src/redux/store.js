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

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filtersCarsSlice } from './filterCars/filterCarsSlice.js';
import { carsReducer } from './cars/carsSlice.js';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  cars: carsReducer,

  filtersCars: filtersCarsSlice.reducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
