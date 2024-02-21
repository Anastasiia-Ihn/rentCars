import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './carsOperations.js';

const carsInitialState = {
  cars: [],
  isLoading: false,
  error: null,
  isFavorive: false,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cars = payload;
      })
      .addCase(fetchCars.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
