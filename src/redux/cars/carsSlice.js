import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchCarsBySearch } from './carsOperations.js';

const carsInitialState = {
  cars: [],
  isRefreshing: false,
  isLoading: false,
  error: null,
  isMore: true,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
        state.isMore = false;
      })
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cars = [...state.cars, ...payload];
        if (payload.length < 12) {
          state.isMore = false;
          return;
        }
        state.isMore = true;
      })
      .addCase(fetchCars.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.isMore = false;
      })
      .addCase(fetchCarsBySearch.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.isRefreshing = false;
      })
      .addCase(fetchCarsBySearch.pending, (state, { payload }) => {
        state.isRefreshing = true;
        console.log(payload);
      })
      .addCase(fetchCarsBySearch.rejected, (state, { payload }) => {
        console.log('error');
        state.isRefreshing = false;
      });
  },
});

export const carsReducer = carsSlice.reducer;
