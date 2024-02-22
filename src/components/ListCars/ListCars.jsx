import { CardCar } from 'components/CardCar/CardCar';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/carsSelectors';
import { ListAllCars } from './ListCars.styled';

export const ListCars = () => {
  const catalog = useSelector(selectCars);
  return (
    <ListAllCars>
      {catalog?.map(item => (
        <CardCar key={item.id} item={item} />
      ))}
    </ListAllCars>
  );
};
