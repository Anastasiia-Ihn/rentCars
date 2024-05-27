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
export const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin: 0 auto 50px auto;
  gap: 20px;
  
  @media only screen and (min-width: 1100px) {
    flex-direction: row;
    padding: 0 120px;
  }
`;

export const Label = styled.label`
  margin-right: 10px;
`;

export const FieldStyled = styled(Field)`
  width: 224px;
  height: 48px;
  padding: 14px 8px 14px 18px;
  /* padding: 14px 18px; */
  border: none;
  border-radius: 14px;

  background: #f7f7fb;

  &::-webkit-scrollbar-track-piece {
    background-color: #d1cfcf;
    width: 150px;
  }
  &::-webkit-scrollbar {
    background-color: #f7f7fb;
    width: 12px;
    overflow: auto;
    cursor: pointer;
    max-height: 88px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f7f7fb; //  колір фону всієї доріжки скролбару
    border-radius: 20px; // заокруглення доріжки скролу
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(52, 112, 255); // колір самого скролу */
    border-radius: 20px; /* заокруглення самого скролу */
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const FieldStyledForPrice = styled(FieldStyled)`
  padding-left: 50px;
  width: 150px;
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
