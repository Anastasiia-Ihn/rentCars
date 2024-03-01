import { useState } from 'react';
import Modal from 'react-modal';

import imageDef from 'images/default-placeholder.png';

import { CardCarAbout } from 'components/CardCarAbout/CardCarAbout';
import { Icon } from 'components/Icon';
import { Button, ContainerForTitle, Img, ItemForList } from './CardCar.styled';
import {
  ListAboutCar,
  Title,
} from 'components/CardCarAbout/CardCarAbout.styled';
import { getFavorites } from 'redux/favorites/favoritesSlise';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavCars } from 'redux/favorites/favoritesSelectors';

export const CardCar = ({ item }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    rentalPrice,
    rentalCompany,
    address,
  } = item;

  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const allFavoriteCars = useSelector(selectFavCars);

  const indexCars = allFavoriteCars.findIndex(item => item.id === id);

  const [, city, country] = address.split(' ');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    dispatch(getFavorites(item));
  };

  return (
    <ItemForList>
      <button
        id={id}
        type="button"
        name="icon-heart"
        className="heart-icon-elem "
        onClick={handleClick}
      >
        <Icon
          className={
            indexCars !== -1
              ? 'heart-icon-action svg-active'
              : 'heart-icon-action'
          }
          stroke="#fff"
          name="heart"
          width="24"
          height="24"
        ></Icon>
      </button>

      <Img src={img || imageDef} alt={model} width={'274px'} height={'268px'} />
      <ContainerForTitle>
        <Title>
          {`${make}`} <span>{model}</span>, {`${year}`}
        </Title>
        <p>{`${rentalPrice}`}</p>
      </ContainerForTitle>
      <ListAboutCar>
        <li>
          <p>{city.slice(0, -1)}</p>
        </li>
        <li>
          <p>{country}</p>
        </li>
        <li>
          <p>{rentalCompany}</p>
        </li>
      </ListAboutCar>

      <ListAboutCar>
        <li>
          <p>{type}</p>
        </li>
        <li>
          <p>{model}</p>
        </li>
        <li>
          <p>{id}</p>
        </li>
      </ListAboutCar>

      <Button type="button" onClick={openModal}>
        Learn more
      </Button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="modal about a car"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <CardCarAbout item={item} onClose={closeModal} />
      </Modal>
    </ItemForList>
  );
};
