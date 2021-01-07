import React from "react"
import styled from "styled-components"
import Vector2 from "../../assets/Vector2.svg"

const Image = styled.img`
    position: fixed;
    bottom:0;
    right:0;
    z-index:6;
    width: 299px;
`;

const Layer2 = ({myRef}) => {
    return <Image ref={myRef} src={Vector2}/>
}

export default Layer2;