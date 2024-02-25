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
import { favoritesReducer } from './favorites/favoritesSlise.js';

const persistConfigFilters = {
  key: 'filters',
  storage,
};

const persistConfigFavorites = {
  key: 'favorites',
  storage,
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filtersCars: persistReducer(persistConfigFilters, filterReducer),
    favoritesCars: persistReducer(persistConfigFavorites, favoritesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
