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

import { carsReducer } from './cars/carsSlice.js';
import { favoritesReducer } from './favorites/favoritesSlise.js';
import { modalReducer } from './modals/modalSlice.js';

const persistConfigFavorites = {
  key: 'favorites',
  storage,
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    modal: modalReducer,
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
