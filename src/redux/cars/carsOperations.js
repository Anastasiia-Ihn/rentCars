import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://654e2195cbc325355742678f.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async ({ page }, thunkAPI) => {
    try {
      const params = new URLSearchParams({
        page,
        limit: 12,
      });
      const response = await axios.get(`/adverts?${params}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCarsBySearch = createAsyncThunk(
  'cars/fetchSome',
  async ({ page = 1, make = '', rentalPrice = '' }, thunkAPI) => {
    console.log(make, rentalPrice);
    try {
      const params = new URLSearchParams({
        page,
        limit: 12,
        make,
        rentalPrice,
      });

      const response = await axios.get(`/adverts?${params}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
