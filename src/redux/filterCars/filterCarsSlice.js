import { createSlice } from '@reduxjs/toolkit';

const filtersCarsInitialState = {
  filtersCars: '',
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

export default filtersCarsSlice.reducer;
