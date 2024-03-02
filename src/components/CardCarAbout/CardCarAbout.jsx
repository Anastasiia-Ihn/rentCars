import { Icon } from 'components/Icon';
import {
  ButtonClose,
  Descrip,
  H4,
  Href,
  Image,
  ItemAccessories,
  ItemConditions,
  ListAboutCar,
  ListAccessories,
  ListRules,
  ModalWrapper,
  Title,
} from './CardCarAbout.styled';
import { nanoid } from '@reduxjs/toolkit';

export const CardCarAbout = ({ item, onClose }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = item;

  const addressArr = address.split(' ');
  const rentalConditionsArr = rentalConditions.split('\n');

  return (
    <ModalWrapper key={id}>
      <ButtonClose type="button" onClick={onClose}>
        <Icon stroke="#121417" name="close" width="24" height="24" />
      </ButtonClose>
      <Image src={img} alt={model} width={'461px'} height={'248px'} />
      <Title>
        {`${make}`} <span>{model}</span>, {`${year}`}
      </Title>

      <ListAboutCar>
        <li>
          <p>{addressArr[addressArr.length - 2].slice(0, -1)}</p>
        </li>
        <li>
          <p>{addressArr[addressArr.length - 1]}</p>
        </li>
        <li>
          <p>{`Id: ${id}`}</p>
        </li>
        <li>
          <p>{`Year: ${year}`}</p>
        </li>
        <li>
          <p>{`Type: ${type}`}</p>
        </li>
      </ListAboutCar>
      <ListAboutCar>
        <li>
          <p>{`Fuel Consumption: ${fuelConsumption}`}</p>
        </li>
        <li>
          <p>{`Engine Size: ${engineSize}`}</p>
        </li>
      </ListAboutCar>
      <Descrip>{description}</Descrip>
      <H4>Accessories and functionalities:</H4>
      <ListAccessories>
        {accessories.concat(functionalities).map(el => (
          <ItemAccessories key={nanoid()}>
            <p>{el}</p>
          </ItemAccessories>
        ))}
      </ListAccessories>
      <H4>Rental Conditions: </H4>
      <ListRules>
        <ItemConditions>
          <p>
            {`Minimum age: `}
            <span>{rentalConditionsArr[0].slice(-2)}</span>
          </p>
        </ItemConditions>
        <ItemConditions>
          <p>{rentalConditionsArr[1]}</p>
        </ItemConditions>
        <ItemConditions>
          <p>{rentalConditionsArr[2]}</p>
        </ItemConditions>

        <ItemConditions>
          <p>
            {`Mileage: `} <span>{mileage.toLocaleString('en')}</span>
          </p>
        </ItemConditions>
        <ItemConditions>
          <p>
            {`Price: `}
            <span>{rentalPrice}</span>
          </p>
        </ItemConditions>
      </ListRules>
      <Href href="tel:+380730000000">Rental car</Href>
    </ModalWrapper>
  );
};
