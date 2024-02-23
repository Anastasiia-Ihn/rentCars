import { useState } from 'react';

const makes = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Chrysler',
  'Kia',
  'Land',
];

export const Filter = ({ onSubmit }) => {
  const [make, setMake] = useState('');

  const handleChange = e => {
    setMake(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(make);
  };
  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <label htmlFor="make">Car Brand</label>
          <select aria-label="select" name="make" onChange={handleChange}>
            {/* <option disabled selected value={''}>
              Select a brand
            </option> */}

            {makes.map(el => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </select>
        </li>
        <li>
          <label htmlFor="price">Price/ 1 hour</label>
          <select name="price" id="">
            {}
          </select>
        </li>
        <li>
          <label>Car mileage / km</label>
          <input type="text" />
          <input type="text" />
        </li>
      </ul>
      <button type="submit">Search</button>
    </form>
  );
};
