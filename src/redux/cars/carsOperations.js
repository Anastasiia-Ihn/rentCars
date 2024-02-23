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
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCarsBySearch = createAsyncThunk(
  'cars/fetchSome',
  async ({ make }, thunkAPI) => {
    try {
      const params = new URLSearchParams({
        make,
      });
      const response = await axios.get(`/adverts?${params}`);
      console.log(response);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
