import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: var(--color-text-gray);
    
font-family: 'Quicksand', sans-serif;
}

body, html{
    height: 100%;
}

input, button{
    border: 0;
    outline: none;
    background: none;
    font-weight: bold;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

p{
    font-family: 'Open Sans', sans-serif;
}

ul{
    list-style: none;
}

:root{
    --color-main-orange: #f15a22; 
    --color-opacity-orange: #f15a2210;
    --color-opacity-orange-medium: #f15a2250;
    --color-main-blue: #11323c;
    --color-opacity-blue:#11323c10;
    --color-opacity-blue-medium:#11323c50;
    --color-light-white: #fafafa;
    --color-border: #eaeaea;
    --color-text-gray: #333;
    --box-shadow-light: rgba(0, 0, 0, 0.1);
    --color-seed: #2fba4d;
}
    
`;
