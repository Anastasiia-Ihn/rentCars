import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  BtnWrapper,
  ButtonSearch,
  Div,
  FieldStyled,
  FieldStyledForPrice,
  FormStyled,
  Label,
  Option,
  Span,
  Wrapper,
} from './Filter.styled';
import { arrNumbers } from 'helpers/arrNumbers';
import makes from '../../makes.json';

const builderSchema = Yup.object().shape({
  make: Yup.string(),
  rentalPrice: Yup.string(),
});
const searchValue = {
  make: '',
  rentalPrice: '',
};

export const Filter = ({ onSubmit, searchParams, handleReset }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={searchParams ? searchParams : searchValue}
      validationSchema={builderSchema}
      onSubmit={onSubmit}
    >
      {({ resetForm, values }) => (
        <FormStyled>
          <Wrapper>
            <Label htmlFor="make">Car Brand</Label>
            <FieldStyled
              id="make"
              component="select"
              aria-label="select"
              name="make"
              value={values.make ? values.make : searchValue.make}
              // defaultValue=""
              type="text"
              placeholder="Enter the text"
            >
              <Option disabled value="">
                Enter the text
              </Option>

              {makes.map(el => (
                <Option value={el} key={el}>
                  {el}
                </Option>
              ))}
            </FieldStyled>
          </Wrapper>
          <Wrapper >
            <Label htmlFor="rentalPrice">Price/ 1 hour</Label>
            <Div>
              <Span>To $</Span>
              <FieldStyledForPrice
                id="rentalPrice"
                name="rentalPrice"
                component="select"
                aria-label="select"
                value={
                  values.rentalPrice
                    ? values.rentalPrice
                    : searchValue.rentalPrice
                }
                type="text"
                placeholder="Enter price"
              >
                <Option disabled value="">
                  Enter price
                </Option>
                {arrNumbers(19).map(el => (
                  <Option key={el} value={el}>
                    {el}
                  </Option>
                ))}
              </FieldStyledForPrice>
            </Div>
          </Wrapper>
          <BtnWrapper>
            <ButtonSearch type="submit">Search</ButtonSearch>
            <ButtonSearch type="reset" onClick={() => handleReset(resetForm)}>
              Reset
            </ButtonSearch>
          </BtnWrapper>
        </FormStyled>
      )}
    </Formik>
  );
};
