import { Filter } from 'components/Filter/Filter';
import { ListCars } from 'components/ListCars/ListCars';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { useEffect } from 'react';
// import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchCars, fetchCarsBySearch } from 'redux/cars/carsOperations';
import {
  // selectIsError,
  selectIsMore,
  selectLoading,
} from 'redux/cars/carsSelectors';
import { setFilter } from 'redux/filterCars/filterCarsSlice';
import { Section } from './Catalog.styled';

export default function Catalog() {
  const dispatch = useDispatch();

  const isMore = useSelector(selectIsMore);
  // const isError = useSelector(selectIsError);
  const [searchParams, setSearchParams] = useSearchParams();
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
    const { make, rentalPrice } = values;
    setSearchParams({ make, rentalPrice });
    dispatch(setFilter({ make, rentalPrice }));
    dispatch(fetchCarsBySearch({ make, rentalPrice }));
    // if (isError) {
    //   toast.error('Not found cars');
    // }
  };

  return (
    <Section>
      <Filter onSubmit={onSubmit} />
      {isLoading ? <div>Loading...</div> : <ListCars />}
      {isMore && <LoadMore onClick={handleClickPage} />}
    </Section>
  );
}
