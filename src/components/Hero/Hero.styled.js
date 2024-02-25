import styled from 'styled-components';
import background from 'images/2.jpg';

export const HeroSection = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 150px 0;

  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${background});
`;

export const MainTitle = styled.h1`
  color: #ffffff;
  font-size: 48px;
  line-height: 1.11;
  text-align: start;
  letter-spacing: 0.02em;
  max-width: 496px;
  margin-left: 100px;
`;
