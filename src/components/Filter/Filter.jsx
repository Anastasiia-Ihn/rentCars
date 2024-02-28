import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
  ButtonSearch,
  FieldStyled,
  FormStyled,
  Label,
  Option,
} from './Filter.styled';
import { arrNumbers } from 'helpers/arrNumbers';

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
          <Option value="">All</Option>
          {makes.map(el => (
            <Option value={el} key={el}>
              {el}
            </Option>
          ))}
        </FieldStyled>

        <Label htmlFor="rentalPrice">Price/ 1 hour</Label>

        <FieldStyled
          name="rentalPrice"
          id=""
          component="select"
          aria-label="select"
        >
          <Option value="">All</Option>
          {arrNumbers(19).map(el => (
            <Option key={el} value={el}>
              {el}
            </Option>
          ))}
        </FieldStyled>

        <ButtonSearch type="submit">Search</ButtonSearch>
      </FormStyled>
    </Formik>
  );
};
