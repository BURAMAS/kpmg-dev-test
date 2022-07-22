import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Navigator from "./Navigator";



const StyledGreeting = styled.div`
display: inline-block;
margin-top: 110px;
text-align: center;
justify-content: center;

`

export default function Greeting(){
    return(
        <>
        <Header/>
        <StyledGreeting>
        <h1>Hello</h1>
       
        <p>This is the devloper test, to view the table filter and seacrh
            click the table button. To access the map with the plotted companies and
            information click map. Home will return you to the greeting page
        </p>
        </StyledGreeting>
        <Navigator/>
        </>

    )
}