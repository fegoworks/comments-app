import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `
@import url('http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin');

  html {
    box-sizing: border-box;
  }
  *, :after, :before {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* background-color: #c8c6a7; */
    background: #a4ebf3;
    font-family: Ubuntu, 'times new roman', times, roman, serif;
  }
`
export default GlobalStyle