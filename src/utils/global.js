import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing:inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html {
    font-size: 62.5%;
    box-sizing: border-box;
    --color-main: ${props => props.theme.colors.main};
    --color-mainDark: ${props => props.theme.colors.mainDark};
    --color-mainLight: ${props => props.theme.colors.mainLight};
    --color-mainLighter: ${props => props.theme.colors.mainLighter};
    --color-text: ${props => props.theme.colors.textColor};
    --color-white: ${props => props.theme.colors.whiteColor};
    --color-errorRed: ${props => props.theme.colors.errorRed};
    --shadow: ${props => props.theme.colors.shadow};

    @media ${props => props.theme.mediaQueries.smallest} {
        font-size: 55%;
    }

    @media ${props => props.theme.mediaQueries.small} {
    font-size: 60%;
}
/* 
@media ${props => props.theme.mediaQueries.medium} {
    font-size: 60%;
}

@media ${props => props.theme.mediaQueries.large} {
    font-size: 60%;
}

@media ${props => props.theme.mediaQueries.largest} {
    font-size: 60%;
} */

}
body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height:1.6;
}


a, input, textarea, button {
    outline:none;
    font-family: inherit;
    text-decoration: none;
}


`;
