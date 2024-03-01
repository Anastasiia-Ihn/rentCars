import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchCarsBySearch } from './carsOperations.js';

const carsInitialState = {
  cars: [],
  page: null,
  isLoading: false,
  isError: null,
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
        state.isError = false;
      })
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.page = payload.page;

        if (payload.arrCars.length < 12) {
          state.isMore = false;
          return;
        }
        state.isMore = true;
        if (Number(state.page) === 1) {
          state.cars = [...payload.arrCars];
          return;
        }
        state.cars = [...state.cars, ...payload.arrCars];
      })
      .addCase(fetchCars.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
        state.isMore = false;
      })
      .addCase(fetchCarsBySearch.pending, (state, { payload }) => {
        state.isError = false;
      })
      .addCase(fetchCarsBySearch.fulfilled, (state, { payload }) => {
        state.isError = false;
        state.cars = payload;
        state.isMore = false;
      })
      .addCase(fetchCarsBySearch.rejected, (state, { payload }) => {
        console.log('error');
        state.isError = true;
        state.cars = [];
      });
  },
});

export const carsReducer = carsSlice.reducer;
