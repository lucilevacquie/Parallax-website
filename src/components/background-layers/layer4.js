import React from "react"
import styled from "styled-components"
import Vector4 from "../../assets/Vector4.svg"

const Image = styled.img`
    position: fixed;
    bottom: 0;
    z-index: 2;
    width: 479px;
    height: 452px;
`;

const Layer4 = () => {
    return(
        <div>
            <Image src={Vector4}/>
        </div>
    )
}

export default Layer4;