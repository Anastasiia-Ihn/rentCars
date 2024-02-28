import { CardCar } from 'components/CardCar/CardCar';
import { useSelector } from 'react-redux';
import { selectVisibleCars } from 'redux/cars/carsSelectors';
import { ListAllCars } from './ListCars.styled';

export const ListCars = () => {
  const visibleCars = useSelector(selectVisibleCars);
  return (
    <ListAllCars>
      {visibleCars?.map(item => (
        <CardCar key={item.id} item={item} />
      ))}
    </ListAllCars>
  );
};
