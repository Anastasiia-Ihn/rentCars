import styled from 'styled-components';

export const ContainerStyled = styled.div`
  margin: 0 auto;
  width: 800px;
`;

export const H1Styled = styled.h1`
  margin-bottom: 20px;
`;

export const H2Styled = styled.h2`
  margin-bottom: 20px;
`;
export const Section = styled.section`
  margin: 0 auto ;
  text-align: center;
  padding: 0 20px;


  @media only screen and (min-width: 768px) {
    padding: 0 50px;
  }

  @media only screen and (min-width: 1100px) {
    padding: 0 120px;
  }
`;
