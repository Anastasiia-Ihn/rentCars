import styled from 'styled-components';



export const Container = styled.div`
  margin-left: auto;
  margin-bottom: 48px;
  margin-right: auto;

  max-width: 1920px;
  padding: 0 120px ;
`;

export const AboutUsList = styled.ul`
  display: flex;
  gap: 15px;
  margin-bottom: 150px;
`;

export const ItemListAboutUs = styled.li`
  padding: 20px;

  h2 {
    text-align: center;
    font-size: 34px;

    margin-bottom: 20px;
  }

  p{
    font-size: 24px;
  }
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 40px;

  margin-bottom: 20px;
`;
