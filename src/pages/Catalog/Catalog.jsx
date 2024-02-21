import { Filter } from 'components/Filter/Filter';
import { ListCars } from 'components/ListCars/ListCars';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/cars/carsOperations';
import { selectLoading } from 'redux/cars/carsSelectors';

export default function Catalog() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <section>
      <h1>Cars</h1>
      <Filter />
      {isLoading ? <div>Loading...</div> : <ListCars />}
      <LoadMore />
    </section>
  );
}
