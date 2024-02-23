import { Filter } from 'components/Filter/Filter';
import { ListCars } from 'components/ListCars/ListCars';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchCars } from 'redux/cars/carsOperations';
import { selectLoading } from 'redux/cars/carsSelectors';

export default function Catalog() {
  const dispatch = useDispatch();

  const { isMore } = useSelector(state => state.cars);

  const [searchParams, setSearchParams] = useSearchParams({});
  // const [makeSearchParams, setMakeSearchParams] = useSearchParams();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    setSearchParams({ page: 1, make: '' });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const page = searchParams.get('page');
    console.log(page);
    // const make = makeSearchParams.get('make');

    const make = searchParams.get('make');
    console.log(make);

    // if (!make) {
    //   return;
    // }
    if (!page) {
      return;
    }

    dispatch(fetchCars({ page, make }));
  }, [dispatch, searchParams]);

  const handleClickPage = () => {
    const currentPage = searchParams.get('page');
    const nextPage = Number(currentPage) + 1;
    setSearchParams({ page: nextPage });
  };

  const onSubmit = value => {
    console.log(...searchParams);
    setSearchParams({ ...searchParams, make: value });
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
