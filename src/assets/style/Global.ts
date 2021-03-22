import { createGlobalStyle } from 'styled-components'


const robotoUrl = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'

const Global = createGlobalStyle`
  @import url(${robotoUrl});
  
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    font-family: Roboto, sans-serif;
    margin: 0;
    min-height: 100vh;
  }
  
  a {
    color: inherit;
  }
`
export default Global