import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonSearch,
  Div,
  FieldStyled,
  FieldStyledForPrice,
  FormStyled,
  Label,
  Option,
  Span,
} from './Filter.styled';
import { arrNumbers } from 'helpers/arrNumbers';
import makes from '../../makes.json';

const builderSchema = Yup.object().shape({
  make: Yup.string(),
  rentalPrice: Yup.string(),
});

export const Filter = ({ onSubmit, searchParams, handleReset }) => {
  return (
    <Formik
      initialValues={searchParams}
      validationSchema={builderSchema}
      onSubmit={onSubmit}
    >
      {({ resetForm }) => (
        <FormStyled>
          <Label htmlFor="make">Car Brand </Label>
          <FieldStyled
            component="select"
            aria-label="select"
            name="make"
            type="text"
            placeholder="Enter the text"
          >
            <Option value="">Enter the text</Option>

            {makes.map(el => (
              <Option value={el} key={el}>
                {el}
              </Option>
            ))}
          </FieldStyled>

          <Label htmlFor="rentalPrice">Price/ 1 hour</Label>
          <Div>
            <Span>To $</Span>
            <FieldStyledForPrice
              name="rentalPrice"
              component="select"
              aria-label="select"
              type="text"
              placeholder="Enter price"
            >
              {/* <Option value="" disabled> */}
              {/* Enter price
            </Option> */}
              {arrNumbers(19).map(el => (
                <Option key={el} value={el}>
                  {el}
                </Option>
              ))}
            </FieldStyledForPrice>
          </Div>

          <ButtonSearch type="submit">Search</ButtonSearch>
          <ButtonSearch type="reset" onClick={() => handleReset(resetForm)}>
            Reset
          </ButtonSearch>
        </FormStyled>
      )}
    </Formik>
  );
};
