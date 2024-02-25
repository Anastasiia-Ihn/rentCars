import { Form } from 'formik';
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
  margin-bottom: 50px;
`;
