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

export const Filter = () => {
  return (
    <form>
      <ul>
        <li>
          <label htmlFor="brand">Car Brand</label>
          <select name="brand">
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
