import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

:root {
  --font-family: "Manrope", sans-serif;
}

body {
  font-family:var(--font-family);
  font-size: 14px;
  max-width: 1920px;
  line-height: 1.42857;
  color: #121417;
  /* padding: 0 128px; */
  background-color: #dbdce4;
  
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
  background: transparent;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}

.ReactModal__Body--open {
    overflow: hidden;
}

.body--close {
    overflow: auto;
}

.svg-active {
  fill: #3477ff;
  stroke: #2477ff;
}

.heart-icon-elem {
  position: absolute;
  right: 0;
  top: 0;

  height: 22px;
  width: 22px;
  margin: 16px 16px 0 0;

  cursor: pointer;
  background-color: inherit;
  border: none;
}

.heart-icon-action {
  
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  }

`;
