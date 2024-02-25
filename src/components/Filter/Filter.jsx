import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { ButtonSearch, FieldStyled, FormStyled, Label } from './Filter.styled';

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
        <Label htmlFor="make">Car Brand </Label>
        <FieldStyled
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
        </FieldStyled>

        <Label htmlFor="rentalPrice">Price/ 1 hour</Label>

        <FieldStyled
          name="rentalPrice"
          id=""
          component="select"
          aria-label="select"
        >
          <option value=""></option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </FieldStyled>

        <ButtonSearch type="submit">Search</ButtonSearch>
      </FormStyled>
    </Formik>
  );
};
