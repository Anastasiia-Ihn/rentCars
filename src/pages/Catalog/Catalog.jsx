import { Filter } from 'components/Filter/Filter';
import { ListCars } from 'components/ListCars/ListCars';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchCars, fetchCarsBySearch } from 'redux/cars/carsOperations';
import {
  selectIsMore,
  selectIsRefreshing,
  selectLoading,
} from 'redux/cars/carsSelectors';
import { setFilter } from 'redux/filterCars/filterCarsSlice';

export default function Catalog() {
  const dispatch = useDispatch();

  const isMore = useSelector(selectIsMore);

  const [searchParams, setSearchParams] = useSearchParams();
  // const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    setSearchParams({ page: 1 });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const page = searchParams.get('page');
    if (!page) {
      return;
    }

    dispatch(fetchCars({ page }));
  }, [dispatch, searchParams]);

  const handleClickPage = () => {
    const currentPage = searchParams.get('page');
    const nextPage = Number(currentPage) + 1;
    setSearchParams({ page: nextPage });
  };

  const onSubmit = (values, form) => {
    // setSearchParams({ page: 1 });
    const { make, rentalPrice } = values;
    dispatch(setFilter({ make, rentalPrice }));

    dispatch(fetchCarsBySearch({ make, rentalPrice }));
  };

  return (
    <section>
      <h1>Cars</h1>
      <Filter onSubmit={onSubmit} />
      {isLoading ? <div>Loading...</div> : <ListCars />}
      {isMore && <LoadMore onClick={handleClickPage} />}
    </section>
  );
}
