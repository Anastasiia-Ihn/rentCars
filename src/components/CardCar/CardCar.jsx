import { useState } from 'react';
import Modal from 'react-modal';

import { CardCarAbout } from 'components/CardCarAbout/CardCarAbout';

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
  console.log(item);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li>
      <input
        id={id}
        type="checkbox"
        name="heart-icon"
        // ${isChecked ? 'checked' : ''}
      />
      {/* <label for="${_id}" aria-hidden="true" class="${labelClass} ">
        <svg class="icon-heart-svg " width="22" height="22">
          <use href="${imgUrl}#icon-heart"></use>
        </svg>
      </label> */}

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
    </li>
  );
};
