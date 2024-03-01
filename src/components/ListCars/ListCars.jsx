import { CardCar } from 'components/CardCar/CardCar';
import { ListAllCars } from './ListCars.styled';
import { nanoid } from '@reduxjs/toolkit';

export const ListCars = ({ visibleCars }) => {
  return (
    <ListAllCars>
      {visibleCars?.map(item => (
        // <CardCar key={item.id} item={item} />
        <CardCar key={nanoid()} item={item} />
      ))}
    </ListAllCars>
  );
};
