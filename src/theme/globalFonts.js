import { createGlobalStyle } from "styled-components";
import GoldplayRegular from '../assets/fonts/Goldplay-Regular.ttf'
import GoldplaySemiBold from '../assets/fonts/Goldplay-SemiBold.ttf'

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: Goldplay-Regular;
    src: url(${GoldplayRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: Goldplay-SemiBold;
    src: url(${GoldplaySemiBold}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`

export default GlobalFonts