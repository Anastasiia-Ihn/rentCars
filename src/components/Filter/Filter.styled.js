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
  margin-right: 10px;

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
  width: 224px;
  height: 48px;
  padding: 14px 8px 14px 18px;
  /* padding: 14px 18px; */
  border: none;
  border-radius: 14px;

  background: #f7f7fb;

  &.scrollbar-container {
    max-height: 272px;
  }

  &::-webkit-scrollbar {
    width: 8px; /* ширина скролбару */
    /* height: 12px; */
    /* scrollbar-color: rgba(18, 20, 23, 0.05); */
    /* scrollbar-width: thin; */
  }

  &::-webkit-scrollbar-track {
    background: #fff; //  колір фону всієї доріжки скролбару
    border-radius: 10px; // заокруглення доріжки скролу
  }

  &::-webkit-scrollbar-thumb {
    background: red; // колір самого скролу */
    /* height: 50%; */
    border-radius: 10px; /* заокруглення самого скролу */
    cursor: pointer;
    /* &:hover {
      background: #3477ff; // колір самого скролу при наведенні
    } */
  }
`;

export const FieldStyledForPrice = styled(FieldStyled)`
  padding-left: 50px;
  width: 125px;
`;

export const Option = styled.option`
  width: 224px;
  margin-bottom: 8px;

  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 16px;

  line-height: 1.25;
  color: rgba(18, 20, 23, 0.2);

  box-shadow: 0 4px 36px 0 rgba(0, 0, 0, 0.02);
  background: #fff;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #121417;
    background-color: #fff;
  }
`;

export const Div = styled.div`
  position: relative;
`;
export const Span = styled.span`
  position: absolute;
  top: 14px;
  left: 14px;
`;
