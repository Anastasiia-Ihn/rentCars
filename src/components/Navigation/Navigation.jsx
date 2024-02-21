import { ListNavStyled, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ListNavStyled>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/catalog">Catalog</StyledLink>
        </li>
        <li>
          <StyledLink to="/favorite">Favorite</StyledLink>
        </li>
      </ListNavStyled>
    </nav>
  );
};
