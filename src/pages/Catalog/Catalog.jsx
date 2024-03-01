import { Filter } from 'components/Filter/Filter';
import { ListCars } from 'components/ListCars/ListCars';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { useEffect } from 'react';
// import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchCars, fetchCarsBySearch } from 'redux/cars/carsOperations';
import {
  selectCars,
  selectIsMore,
  selectLoading,
} from 'redux/cars/carsSelectors';
import { Section } from './Catalog.styled';
import { getSearchParamsObject } from 'helpers/getSearchParamsObject';

export default function Catalog() {
  const dispatch = useDispatch();

  const isMore = useSelector(selectIsMore);
  const visibleCars = useSelector(selectCars);
  const isLoading = useSelector(selectLoading);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const paramsObject = getSearchParamsObject(searchParams);

    const { page, ...rest } = paramsObject;
    const filtersLength = Object.keys(rest).length;

    if (!page && !filtersLength) {
      console.log(page);
      setSearchParams({ page: 1 });
      return;
    }

    if (filtersLength) {
      dispatch(fetchCarsBySearch(rest));
      return;
    }

    dispatch(fetchCars(paramsObject));
  }, [dispatch, searchParams, setSearchParams]);

  const handleClickPage = () => {
    const currentPage = searchParams.get('page');
    const nextPage = Number(currentPage) + 1;
    setSearchParams({ page: nextPage });
  };

  const onSubmit = values => {
    setSearchParams(values);
  };

  const handleReset = reset => {
    reset();
    setSearchParams({});
  };
  return (
    <Section>
      <Filter
        onSubmit={onSubmit}
        handleReset={handleReset}
        searchParams={searchParams}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ListCars visibleCars={visibleCars} />
      )}
      {isMore && <LoadMore onClick={handleClickPage} />}
    </Section>
  );
}
