import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav``;

export const ListNavStyled = styled.ul`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 40px;
    align-items: center;

    font-size: 35px;
  }
`;
export const StyledLink = styled(NavLink)`
  cursor: pointer;

  padding-top: 15px;
  padding-bottom: 15px;

  &.active {
    border-bottom: 1px solid #3470ff;
    font-weight: 600;
    color: #3470ff;
  }
`;
