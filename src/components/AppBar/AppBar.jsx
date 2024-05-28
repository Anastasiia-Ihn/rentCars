import { Navigation } from '../Navigation/Navigation';

import { HeaderStyled, Container } from './AppBar.styled';

export const AppBar = () => {
  return (
    <HeaderStyled>
      <Container>
        <Navigation />
      </Container>
    </HeaderStyled>
  );
};
