import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

/* :root {
  --font-family: "Manrope", sans-serif;
  --second-family: "Inter", sans-serif;
} */

body {
  font-size: 14px;
  width: 1440px;
  line-height: 1.42857;
  color: #121417;
  padding: 0 15px;
  
  margin: 0 auto;
}



img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
  
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

a {
  text-decoration: none;
}

li{
  text-decoration: none;
   list-style: none;
   padding: 0;
}

.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    transform: translate(-50%, -50%);
    padding: 0;
    border: var(--borderModal);
    background: transparent;
    border-radius: 8px;
    overflow: hidden;
  }
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }

  
.icon-heart-svg {
  z-index: 25;
  position: absolute;
  top: 0;
  right: 0;

  pointer-events: none;
  stroke: #f8f8f8;
  opacity: 0.5;
  width: 22px;
  height: 22px;

  fill: #ddddcc00;
}
/* .svg-active {
  fill: #f8f8f8;
  opacity: 1;
} */

.heart-icon-elem {
  z-index: 23;
  opacity: 0; /* це щоб сховати input (галочку)*/
  position: absolute;
  right: 0;
  top: 0;
  height: 22px;
  width: 22px;
  margin: 16px 16px 0 0;
  cursor: pointer;
}
.heart-icon-elem:checked + label.heart-icon-action > .icon-heart-svg {
  fill: #f8f8f8;
  opacity: 1;
}

.heart-icon-action {
  z-index: 24;
  margin: 16px 16px 0 0;

  pointer-events: none;
  /* opacity: 0; */
  position: absolute;
  right: 0;
  top: 0;
  height: 22px;
  width: 22px;
  color: transparent;
  user-select: none;
  /* background-color: #bdaeae00; */
  border-radius: inherit;
  cursor: pointer;
}

`;

export const Button = styled.button`
  border-radius: 8px;
  border-color: #ffffff;
  font-weight: 600;
  padding: 5px;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #23784ca1;
  }
`;
