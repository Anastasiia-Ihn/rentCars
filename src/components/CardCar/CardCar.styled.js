import styled from 'styled-components';

export const ItemForList = styled.li`
  position: relative;
  width: 274px;
  height: 426px;
`;

export const ContainerForTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
`;

export const Img = styled.img`
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 12px;
  padding: 12px 99px;
  width: 100%;
  height: 44px;

  margin-top: 24px;
  background: #3470ff;
  color: #fff;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background: #0b44cd;
  }
`;
