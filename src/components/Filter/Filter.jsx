import { Field, Formik } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { ButtonSearch, FormStyled } from './Filter.styled';

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
  const initialValues = useSelector(state => state.filtersCars.filtersCars);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={builderSchema}
      onSubmit={onSubmit}
    >
      <FormStyled>
        <label htmlFor="make">
          Car Brand
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
        </label>
        <label htmlFor="rentalPrice">Price/ 1 hour</label>

        <Field name="rentalPrice" id="" component="select" aria-label="select">
          <option value=""></option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </Field>

        <ButtonSearch type="submit">Search</ButtonSearch>
      </FormStyled>
    </Formik>
  );
};
