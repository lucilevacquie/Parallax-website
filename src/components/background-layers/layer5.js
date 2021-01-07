import React from "react"
import styled from "styled-components"
import Vector5 from "../../assets/Vector5.svg"

const Image = styled.img`
    position: fixed;
    z-index:3;
    width: 106px;
    top: 2.5rem;
    left: -6.5rem;
`;

const Layer5 = ({myRef}) => {
    return <Image ref={myRef} src={Vector5}/>
}

export default Layer5;