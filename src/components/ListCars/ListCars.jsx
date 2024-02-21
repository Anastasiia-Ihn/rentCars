import { CardCar } from 'components/CardCar/CardCar';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/carsSelectors';

export const ListCars = () => {
  const catalog = useSelector(selectCars);
  return (
    <ul>
      {catalog?.map(item => (
        <CardCar key={item.id} item={item} />
      ))}
      <li>ListCars</li>
    </ul>
  );
};
