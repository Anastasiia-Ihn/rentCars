import { createSlice } from '@reduxjs/toolkit';

const initialStateFavorites = {
  favorites: [],
};
export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialStateFavorites,
  reducers: {
    getFavorites: (state, { payload }) => {
      const index = state.favorites.findIndex(item => item.id === payload.id);
      console.log(index);

      if (index === -1) {
        state.favorites = [...state.favorites, payload];
        return;
      }
      state.favorites.splice(index, 1);
    },
  },
});

export const { getFavorites } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
