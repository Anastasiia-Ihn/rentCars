import { Icon } from 'components/Icon';
import {
  ButtonClose,
  Descrip,
  H4,
  Href,
  Image,
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
  // const mileageNew = mileage.
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
          <li key={nanoid()}>
            <p>{el}</p>
          </li>
        ))}
      </ListAccessories>
      <H4>Rental Conditions: </H4>
      <ListRules>
        {rentalConditionsArr.map(el => {
          // console.log(typeof el.slice(-2));
          // if (Number(el.slice(-2))) {
          //   <ItemConditions key={nanoid()}>
          //     <p>
          //       {`${el}`} <span>{el.slice(-2)}</span>,
          //     </p>
          //   </ItemConditions>;
          // }

          return (
            <ItemConditions key={nanoid()}>
              <p>{el}</p>
            </ItemConditions>
          );
        })}

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
