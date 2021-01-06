import React from "react"
import styled from "styled-components"
import Vector1 from "../../assets/Vector1.svg";

const Image = styled.img`
    position: fixed;
    bottom:0;
    z-index:5;
    width: 340px;
    @media (min-width: 767px){
        width: 547px;
    }
`;



const Layer1 = ({ myRef }) => {
    return <Image ref={myRef} src={Vector1}/>
}

export default Layer1;