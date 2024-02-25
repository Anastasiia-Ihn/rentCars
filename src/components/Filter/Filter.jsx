import { Field, Formik, Form } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

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

const builderSchema = Yup.object().shape({
  make: Yup.string(),
  rentalPrice: Yup.string(),
});

export const Filter = ({ onSubmit }) => {
  const initial = useSelector(state => state.filtersCars.filtersCars);
  return (
    <Formik
      initialValues={initial}
      validationSchema={builderSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="make">Car Brand</label>
        <Field
          component="select"
          aria-label="select"
          name="make"
          placeholder="Enter the text"
        >
          <option value="">All</option>
          {makes.map(el => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </Field>

        <label htmlFor="rentalPrice">Price/ 1 hour</label>

        <Field name="rentalPrice" id="" component="select" aria-label="select">
          <option value=""></option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </Field>

        <label>Car mileage / km</label>
        <input type="text" />
        <input type="text" />

        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};
