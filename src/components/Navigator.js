import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledNavigation  = styled.div`

display: flex;
margin-top: 40px;
text-align: center;
justify-content: center;


li{

    display: inline-block;
    align-items: center;
    
    a{

        text-decoration: none;
        padding: 20px;
        letter-spacing: 2px;

        &:hover{

            color: orange;
            transition: 0.5s ease;

        }
        
    }
}
`

export default function Navigator() {

    return(

    <StyledNavigation>
        <ul>
            <li>
                <Link to='/'>
                HOME
                </Link>
            </li>
            <li>
                <Link to='/map'>
                MAP
                </Link>
            </li>
            <li>
                <Link to='/table'>
                TABLE
                </Link>
            </li>
        </ul>
    </StyledNavigation>
    
    )
}