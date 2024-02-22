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

  return (
    <section>
      <h1>Cars</h1>
      <Filter />
      {isLoading ? <div>Loading...</div> : <ListCars />}
      {isMore && <LoadMore onClick={handleClickPage} />}
    </section>
  );
}
