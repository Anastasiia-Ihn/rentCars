import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://654e2195cbc325355742678f.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async ({ page = 1 }, thunkAPI) => {
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
  'cars/fetchAllForFilters',
  async (filters, thunkAPI) => {
    try {
      if (filters?.make && filters?.rentalPrice) {
        const params = new URLSearchParams({
          make: filters.make,
        });
        const response = await axios.get(`/adverts?${params}`);

        const cars = response.data;

        const filteredCars = cars.filter(
          car => Number(car.rentalPrice.slice(1)) <= Number(filters.rentalPrice)
        );
        return filteredCars;
      } else if (filters?.make) {
        const params = new URLSearchParams({
          make: filters.make,
        });
        const response = await axios.get(`/adverts?${params}`);

        return response.data;
      } else if (filters?.rentalPrice) {
        const response = await axios.get(`/adverts?`);

        return response.data.filter(
          car => Number(car.rentalPrice.slice(1)) <= Number(filters.rentalPrice)
        );
      } else {
        console.log('err');
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// const filteredCars = cars.filter(car => {
//   return Object.entries(filters).every(
//     ([key, value]) => car[key] === value
//   );
// });

// return toast.error('Not found. You need to choose other options');
