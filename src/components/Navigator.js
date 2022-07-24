import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledNavigation  = styled.div`

display: flex;
margin-top: 40px;
margin-left: -25px;

li{

    display: inline-block;
    
    a{

        text-decoration: none;
        padding-right: 20px;
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