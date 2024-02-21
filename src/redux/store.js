import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { filtersCarsSlice } from './filterCars/filterCarsSlice.js';
import { carsReducer } from './cars/carsSlice.js';

const rootReducer = combineReducers({
  cars: carsReducer,

  // filtersCars: filtersCarsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
