import styled, {createGlobalStyle} from 'styled-components'

const Globalstyle = createGlobalStyle`

*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
body{
    width: 80%;
    margin: auto;
}
:root{
    /* primary */
    --bright-red :hsl(12, 88%, 59%);
    --Dark-Blue: hsl(228, 39%, 23%);
    --light-bright-red:#e58067;
    --light-red-rgb : rgb(211, 121, 121)
    /* neutral */
--Dark-Grayish-Blue: hsl(227, 12%, 61%);
--Very-Dark-Blue: hsl(233, 12%, 13%);
--Very-Pale-Red: hsl(13, 100%, 96%);
--Vary-Light-Gray: hsl(0, 0%, 98%);
/* transition */
--transition: 500ms;
}
ul{
    list-style: none;
}
body{
    font-family: 'Be Vietnam Pro', sans-serif;
}
`

export default Globalstyle