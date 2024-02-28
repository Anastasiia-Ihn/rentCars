import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

:root {
  --font-family: "Manrope", sans-serif;
}

body {
  font-family:var(--font-family);
  font-size: 14px;
  width: 1440px;
  line-height: 1.42857;
  color: #121417;
  padding: 0 128px;
  
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
