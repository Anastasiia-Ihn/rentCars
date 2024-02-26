import { CardCar } from 'components/CardCar/CardCar';
import { ListAllCars } from '../ListCars/ListCars.styled';

export const FavoriteList = ({ favoritesCars }) => {
  return (
    <ListAllCars>
      {favoritesCars?.map(item => (
        <CardCar key={item.id} item={item} />
      ))}
    </ListAllCars>
  );
};
