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
      console.log(payload);
      state.filtersCars = payload;
    },
  },
});

export const { setFilter } = filtersCarsSlice.actions;

export const filterReducer = filtersCarsSlice.reducer;
