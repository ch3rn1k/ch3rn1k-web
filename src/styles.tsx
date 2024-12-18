import { createGlobalStyle } from 'styled-components';

import RoadRadioWoff from './assets/fonts/RoadRadio/RoadRadio.woff';
import RoadRadioWoff2 from './assets/fonts/RoadRadio/RoadRadio.woff2';

import GilroyRegularWoff from './assets/fonts/Gilroy/Gilroy-Regular.woff';
import GilroyRegularWoff2 from './assets/fonts/Gilroy/Gilroy-Regular.woff2';
import GilroyBoldWoff from './assets/fonts/Gilroy/Gilroy-Bold.woff';
import GilroyBoldWoff2 from './assets/fonts/Gilroy/Gilroy-Bold.woff2';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'RoadRadio';
    src: local('Road Radio Regular'), url(${RoadRadioWoff2}) format('woff2'), url(${RoadRadioWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Regular'), url(${GilroyRegularWoff2}) format('woff2'), url(${GilroyRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gilroy';
    src: local('Gilroy Bold'), url(${GilroyBoldWoff2}) format('woff2'), url(${GilroyBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

  :root {
    --color-main: #f9d342;
    --color-sub: #292826;

    @supports (font-size: clamp(1rem, 1vw, 1rem)) {
      --font-size-sm: clamp(0.8rem, -0.02vw + 0.8rem, 0.79rem);
      --font-size-base: clamp(1rem, 0.34vw + 0.91rem, 1.19rem);
      --font-size-md: clamp(1.25rem, 0.97vw + 1.01rem, 1.78rem);
      --font-size-lg: clamp(1.56rem, 2.02vw + 1.06rem, 2.67rem);
      --font-size-xl: clamp(1.95rem, 3.74vw + 1.02rem, 4.01rem);
      --font-size-xxl: clamp(2.44rem, 6.49vw + 0.82rem, 6.01rem);
      --font-size-xxxl: clamp(3.05rem, 10.85vw + 0.34rem, 9.02rem);
    }
    @supports not (font-size: clamp(1rem, 1vw, 1rem)) {
      --font-size-sm: 0.8rem;
      --font-size-base: 1rem;
      --font-size-md: 1.25rem;
      --font-size-lg: 1.56rem;
      --font-size-xl: 1.95rem;
      --font-size-xxl: 2.44rem;
      --font-size-xxxl: 3.05rem;

      @media screen and (min-width: 1000px) {
        --font-size-sm: 0.79rem;
        --font-size-base: 1.19rem;
        --font-size-md: 1.78rem;
        --font-size-lg: 2.67rem;
        --font-size-xl: 4.01rem;
        --font-size-xxl: 6.01rem;
        --font-size-xxxl: 9.02rem;
      }
    }

    @supports (padding: clamp(1rem, 1%, 1rem)) {
      --padding-section: clamp(1rem, 5%, 3rem);
    }
    @supports not (padding: clamp(1rem, 1%, 1rem)) {
      --padding-section: 1rem 3rem;

      @media screen and (min-width: 1000px) {
        --padding-section: 1rem 1.5rem;
      }
    }
  }

  body {
    font-family: 'RoadRadio', sans-serif;
    background-color: var(--color-sub);
    cursor: crosshair;
    color: white;
    padding: 0;
    margin: 0;
    font-size: var(--font-size-base);
  }

  small {
    font-size: var(--font-size-sm);
  }
  h6 {
    font-size: var(--font-size-base);
    margin: 0;
  }
  h5 {
    font-size: var(--font-size-md);
    margin: 0;
  }
  h4 {
    font-size: var(--font-size-lg);
    margin: 0;
  }
  h3 {
    font-size: var(--font-size-xl);
    margin: 0;
  }
  h2 {
    font-size: var(--font-size-xxl);
    margin: 0;
  }
  h1 {
    font-size: var(--font-size-xxxl);
    margin: 0;
  }
  a {
    color: var(--color-main);
  }
`;

export default GlobalStyles;
