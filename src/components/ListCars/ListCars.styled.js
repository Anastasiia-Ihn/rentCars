import styled from 'styled-components';

export const ListAllCars = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;
