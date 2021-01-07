import React from "react"
import styled from "styled-components"
import Vector1 from "../../assets/Vector1.svg";

const Image = styled.img`
    position: fixed;
    bottom:0;
    z-index:7;
    width: 340px;
`;



const Layer1 = ({ myRef }) => {
    return <Image ref={myRef} src={Vector1}/>
}

export default Layer1;