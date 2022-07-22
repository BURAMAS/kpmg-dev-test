import logo from '../assets/KPMG-Logo-Oficial.jpg'
import styled from 'styled-components'

const HeaderStyle = styled.div`

display: inline-flex;
position: fixed;
background-color: white;
width: 100%;
align-items: center;
border-bottom: 1px solid #d3d3d3;
z-index: 5;
top: 0;
left: 0;
justify-content: center;
text-align: center;


img{
   padding: 20px;
   width: 100%;
}

h1{
    font-family: sans-serif;
    width: 100%;
}
`

export default function Header(){
    return(
    <HeaderStyle>
        <img src={logo} height={100}/>
        <h1>Developer Test - Ebrima Saidy</h1>
    </HeaderStyle>

    )
}