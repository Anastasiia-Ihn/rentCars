import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: relative;
  width: 541px;
  height: 752px;
  padding: 40px;

  border-radius: 24px;
  background-color: #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  z-index: 20;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

export const Image = styled.img`
  margin-bottom: 14px;

  border-radius: 14px;
  background: #f3f3f2;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 18px;

  line-height: 1.33333;

  span {
    color: #3470ff;
  }
`;

export const ListAboutCar = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 2px;

  font-weight: 400;
  font-size: 12px;

  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;
export const Descrip = styled.p`
  margin-bottom: 24px;

  font-weight: 400;
`;

export const H4 = styled.h4`
  margin-bottom: 8px;

  font-weight: 500;
`;

export const ListAccessories = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  margin-bottom: 24px;

  font-weight: 400;
  font-size: 12px;

  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const ItemAccessories = styled(ListAboutCar)``;

export const ItemConditions = styled.li`
  padding: 7px 14px;
  border-radius: 35px;

  font-weight: 400;
  font-size: 12px;

  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #363535;
  background-color: #f9f9f9;

  span {
    color: #3470ff;
    font-weight: 500;
  }
`;

export const ListRules = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;

  span {
    color: #3470ff;
    font-weight: 600;
  }
`;

export const Href = styled.a`
  border-radius: 12px;
  padding: 12px 50px;
  width: 168px;
  height: 44px;
  background: #3470ff;
  color: #fff;
  font-weight: 600;
`;
