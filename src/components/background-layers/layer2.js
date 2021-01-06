import React from "react"
import styled from "styled-components"
import Vector2 from "../../assets/Vector2.svg"

const Image = styled.img`
    position: fixed;
    bottom:0;
    right:0;
    z-index:4;
    width: 299px;
`;

const Layer2 = () => {
    return(
        <div>
            <Image src={Vector2}/>
        </div>
    )
}

export default Layer2;