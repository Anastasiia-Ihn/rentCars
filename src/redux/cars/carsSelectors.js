export const selectCars = state => state.cars.cars;
export const selectLoading = state => state.cars.isLoading;
export const selectIsError = state => state.cars.isError;
export const selectIsRefreshing = state => state.cars.isRefreshing;
export const selectIsMore = state => state.cars.isMore;

export const selectFavCars = state => state.favoritesCars.favorites;
