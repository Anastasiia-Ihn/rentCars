import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import {
  selectModalContent,
  selectModalStatus,
} from 'redux/modals/modalSelector';
import { onCloseModal } from 'redux/modals/modalSlice';
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

export const CardCarAbout = () => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectModalStatus);
  const modalContent = useSelector(selectModalContent);

  if (!modalStatus || !modalContent) {
    return;
  }

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
  } = modalContent;

  const closeModal = () => {
    dispatch(onCloseModal());
  };

  const addressArr = address.split(' ');
  const rentalConditionsArr = rentalConditions.split('\n');

  return (
    <>
      {modalStatus && (
        <Modal
          isOpen={modalStatus}
          onRequestClose={closeModal}
          contentLabel="modal about a car"
          className="modal-content"
          overlayClassName="modal-overlay"
          htmlOpenClassName={
            modalStatus ? 'ReactModal__Body--open' : 'body--close'
          }
        >
          <ModalWrapper key={id}>
            <ButtonClose type="button" onClick={closeModal}>
              <Icon stroke="#121417" name="close" width="24" height="24" />
            </ButtonClose>
            <Image src={img} alt={model} width={'461px'} height={'208px'} />
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
        </Modal>
      )}
    </>
  );
};
