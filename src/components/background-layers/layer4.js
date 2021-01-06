import React from "react"
import styled from "styled-components"
import Vector4 from "../../assets/Vector4.svg"

const Image = styled.img`
    position: fixed;
    bottom: 0;
    z-index: 2;
    width: 479px;
`;

const Layer4 = ({myRef}) => {
    return <Image ref={myRef} src={Vector4}/>
}

export default Layer4;