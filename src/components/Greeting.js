import styled from "styled-components";
import Header from "./Header";
import Navigator from "./Navigator";



const StyledGreeting = styled.div`
display: inline-block;
margin-top: 110px;
text-align: center;
justify-content: center;
font-size: large;
`

const StyledAnimation = styled.div`
animation-name: slide;
animation-duration: 4s;

@keyframes slide {

    from {
        margin-left: 100%;
        
    }

    to {
        margin-left: 0%;
        
    };
    
}
`

export default function Greeting(){
    return(
        <>
        <Header/>
        <StyledAnimation>
        <StyledGreeting>
        <h1>Hello!</h1>
       
        <p>This is the devloper test, to view the table filter and seacrh
            click the table button. To access the map with the plotted companies and
            information click map. Home will return you to the greeting page
        </p>
        </StyledGreeting>
        <Navigator/>
        </StyledAnimation>
        </>

    )
}