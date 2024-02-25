import { Field, Form } from 'formik';
import styled from 'styled-components';

export const ButtonSearch = styled.button`
  border: none;
  border-radius: 12px;
  padding: 14px 44px;
  width: 136px;
  height: 48px;

  background: #3470ff;
  color: #fff;
  font-weight: 600;
  line-height: 1.42857;

  &:hover {
    cursor: pointer;
    background: #0b44cd;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  margin-right: 10px;
`;

export const FieldStyled = styled(Field)`
  margin-right: 20px;

  padding: 14px 18px;
  border-radius: 14px;
  width: 224px;
  height: 48px;
`;
