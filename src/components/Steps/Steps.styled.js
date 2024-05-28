import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-bottom: 48px;
  margin-right: auto;

  max-width: 1920px;
  padding: 0 120px;
  h2 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
  }

  > p {
    font-size: 24px;
    margin-bottom: 40px;

    @media only screen and (min-width: 1100px) {
      margin-bottom: 80px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;

    @media only screen and (min-width: 1100px) {
      flex-direction: row;
      justify-content: space-between;
    }

    li {
      border: 1px solid #3470ff;
      border-radius: 15px;
      padding: 20px;
      max-height: 180px;
      max-width: 450px;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-size: 16px;

      @media only screen and (min-width: 1100px) {
       height: 250px;
       width: 350px;
      }
    }

    li::after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 0;
      left: -70px;
      width: 0;
      height: 0;
      border-top: 100px solid rgba(52, 112, 255, 0.3);
      border-right: 70px solid transparent;
      border-left: 70px solid transparent;

     @media only screen and (min-width: 1100px) {
     
        top: -35px;
        left: -20px;
       
        border-top: 70px solid transparent;
        border-bottom: 70px solid transparent;
        border-left: 100px solid rgba(52, 112, 255, 0.3);
      
    } }

  
  }
`;

export const Arrow = styled.div`
  
`;