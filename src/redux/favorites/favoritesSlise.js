import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    getFavorites: (state, { payload }) => {
      console.log(payload.id);
      //   const arr = state.favorites;
      //   console.log(arr);
      //   if (arr.find(item => item.id === payload.id)) {
      //     return;
      //   }

      //   state.favorites.push(payload);
      state.favorites = [...state.favorites, ...payload];
    },
  },
});

export const { getFavorites } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
