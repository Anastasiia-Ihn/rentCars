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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  // const labelClass = localStorage.includes(id)
  //   ? 'heart-icon-action  svg-active'
  //   : 'heart-icon-action ';

  // const labelClass = 'heart-icon-action ';

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addressArr = address.split(' ');

  return (
    <ItemForList>
      <input
        id={id}
        type="checkbox"
        name="icon-heart"
        className="heart-icon-elem"
        // ${isChecked ? 'checked' : ''}
      />

      <label htmlFor={id} aria-hidden="true" className="heart-icon-action">
        <Icon stroke="#fff" name="heart" width="24" height="24"></Icon>
      </label>

      <Img src={img || imageDef} alt={model} width={'274px'} height={'268px'} />
      <ContainerForTitle>
        <Title>
          {`${make}`} <span>{model}</span>, {`${year}`}
        </Title>
        <p>{`${rentalPrice}`}</p>
      </ContainerForTitle>
      <ListAboutCar>
        <li>
          <p>{addressArr[addressArr.length - 2].slice(0, -1)}</p>
        </li>
        <li>
          <p>{addressArr[addressArr.length - 1]}</p>
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
        {/* <li>
          <p>{functionalities[0]}</p>
        </li> */}
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
