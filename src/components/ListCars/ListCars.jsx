import { CardCar } from 'components/CardCar/CardCar';
import { ListAllCars } from './ListCars.styled';

export const ListCars = ({ visibleCars }) => {
  return (
    <ListAllCars>
      {visibleCars.length ? (
        visibleCars?.map(item => <CardCar key={item.id} item={item} />)
      ) : (
        <h3>Sorry, try again with other options.</h3>
      )}
    </ListAllCars>
  );
};
