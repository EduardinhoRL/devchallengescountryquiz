import {createGlobalStyle} from 'styled-components'
import bg from '../img/background.png'

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${bg});
    background-repeat: no-repeat;
    background-size: center;
    font-family: poppins;
  }
`

export default GlobalStyle