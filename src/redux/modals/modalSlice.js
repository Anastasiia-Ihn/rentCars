import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: null,
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onOpenModal: (state, { payload }) => {
      state.isOpen = true;
      state.content = payload;
    },
    onCloseModal: state => {
      state.isOpen = false;
      state.content = null;
    },
  },
});

export const { onCloseModal, onOpenModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
