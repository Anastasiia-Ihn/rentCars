import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.cars;
export const selectLoading = state => state.cars.isLoading;
export const selectIsError = state => state.cars.isError;
export const selectIsRefreshing = state => state.cars.isRefreshing;
export const selectIsMore = state => state.cars.isMore;

export const selectFavCars = state => state.favoritesCars.favorites;
export const selectFilters = state => state.filtersCars.filtersCars;

export const selectVisibleCars = createSelector(
  [selectCars, selectFilters],
  (cars, filters) => {
    if (filters.make !== '' && filters.rentalPrice === '') {
      return cars.filter(car =>
        car.make.toLowerCase().includes(filters.make.toLowerCase())
      );
    }

    if (filters.make === '' && filters.rentalPrice !== '') {
      return cars.filter(
        car => Number(car.rentalPrice.slice(1)) <= Number(filters.rentalPrice)
      );
    }

    if (filters.make !== '' && filters.rentalPrice !== '') {
      let carsByMake = [];
      cars.filter(car => {
        const isMake = car.make
          .toLowerCase()
          .includes(filters.make.toLowerCase());

        if (!isMake) {
          return;
        }

        return carsByMake.push(car);
      });
      return carsByMake.filter(
        car => Number(car.rentalPrice.slice(1)) <= Number(filters.rentalPrice)
      );
    }

    return cars;
  }
);
