import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-image: linear-gradient(
    180deg,
    rgb(13 121 255 / 20%) 0%,
    rgb(177 176 246 / 0%) 99%
  );

  padding: 40px 20px;

  @media only screen and (min-width: 768px) {
    padding: 40px 50px;
  }

  @media only screen and (min-width: 1100px) {
    padding: 80px 120px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  font-size: 24px;

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Span = styled.span`
font-weight:700;
font-style: italic;
`;