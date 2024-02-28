import { createSlice } from '@reduxjs/toolkit';

const filtersCarsInitialState = {
  filtersCars: {
    make: '',
    rentalPrice: '',
  },
};

export const filtersCarsSlice = createSlice({
  name: 'filtersCars',
  initialState: filtersCarsInitialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filtersCars = payload;
    },
  },
});

export const { setFilter } = filtersCarsSlice.actions;

export const filterReducer = filtersCarsSlice.reducer;