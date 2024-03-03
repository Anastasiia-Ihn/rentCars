import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filtersCars: {
    make: '',
    rentalPrice: '',
  },
};

export const filtersCarsSlice = createSlice({
  name: 'filtersCars',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filtersCars = payload;
    },
  },
});

export const { setFilter } = filtersCarsSlice.actions;

export const filterReducer = filtersCarsSlice.reducer;
