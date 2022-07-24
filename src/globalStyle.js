import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding : 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
 
}
h1{
    font-family: 'Raleway', sans-serif;
    letter-spacing: 2.5px;
    text-transform: uppercase;
}

p{
    font-style: italic;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

a{
    text-decoration: none;
}

li{
    list-style: none;
}
`;

export default GlobalStyle