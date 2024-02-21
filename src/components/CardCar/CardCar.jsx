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
      <button type="button">Learn more</button>
    </li>
  );
};
