import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchCarsBySearch } from './carsOperations.js';

const carsInitialState = {
  cars: [],
  isRefreshing: false,
  isLoading: false,
  isError: null,
  isMore: true,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,

  // reducers: {
  //   setPage: (state, { payload }) => {
  //     state.page = payload;
  //     console.log(state.page);
  //   },
  // },

  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isRefreshing = true;
        state.isLoading = true;
        state.isMore = false;
        state.isError = false;
      })
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.isRefreshing = false;

        state.cars = [...state.cars, ...payload];
        if (payload.length < 12) {
          state.isMore = false;
          return;
        }
        state.isMore = true;
      })
      .addCase(fetchCars.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
        state.isMore = false;
        state.isRefreshing = false;
      })
      .addCase(fetchCarsBySearch.pending, (state, { payload }) => {
        state.isRefreshing = true;
        state.isError = false;
      })
      .addCase(fetchCarsBySearch.fulfilled, (state, { payload }) => {
        state.isError = false;
        state.cars = payload;
        state.isRefreshing = false;
        state.isMore = false;
      })
      .addCase(fetchCarsBySearch.rejected, (state, { payload }) => {
        console.log('error');
        state.isRefreshing = false;
        state.isError = true;
        state.cars = [];
      });
  },
});

export const carsReducer = carsSlice.reducer;

// export const { setPage } = carsSlice.actions;
