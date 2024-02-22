import { useState } from 'react';
import Modal from 'react-modal';

import { CardCarAbout } from 'components/CardCarAbout/CardCarAbout';
import { Icon } from 'components/Icon';
import { ItemForList } from './CardCar.styled';

export const CardCar = ({ item }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = item;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  // const localStorageIds =
  //   JSON.parse(localStorage.getItem('saveCheckedFavorite')) ?? [];

  // const isIdInLocalStorage = localStorageIds.includes(id);

  // const labelClass = isIdInLocalStorage
  //   ? 'heart-icon-action  svg-active'
  //   : 'heart-icon-action ';

  // const labelClass = 'heart-icon-action ';

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <Icon stroke="#121417" name="heart" width="24" height="24"></Icon>
      </label>

      <img src={img} alt={model} />
      <h3>{`${make} ${model}, ${year}`}</h3>
      <p>{`${rentalPrice}`}</p>
      <p>{address}</p>
      <p>{address}</p>

      <p>{rentalCompany}</p>
      <p>{type}</p>
      <p>{model}</p>
      <p>{id}</p>
      <p>{functionalities}</p>

      <button type="button" onClick={openModal}>
        Learn more
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Need help modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <CardCarAbout item={item} onClose={closeModal} />
      </Modal>
    </ItemForList>
  );
};
