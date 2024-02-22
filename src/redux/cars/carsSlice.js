import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './carsOperations.js';

const carsInitialState = {
  cars: [],
  isLoading: false,
  error: null,
  // isFavorive: false,
  isMore: true,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,

  // reducers: {
  //   setCurrentPage(state, action) {
  //     state.currentPage = action.payload;
  //   },
  // },

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
      });
  },
});

export const carsReducer = carsSlice.reducer;
