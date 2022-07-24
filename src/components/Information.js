import styled from "styled-components"

const InfoStyle = styled.div`

display: inline-block;
margin-top: 110px;
text-align: left;
justify-content: center;
font-size: large;

`

export default function Information({title, description}) {
    return(
    <InfoStyle>
        <h1>{title}</h1> 
        <p>{description}</p>
    </InfoStyle>
    )

}