import React from "react"
import styled from "styled-components"
import Vector3 from "../../assets/Vector3.svg"

const Image = styled.img`
    position: fixed;
    bottom:0;
    z-index:3;
    width: 456px;
`;

const Layer3 = () => {
    return(
        <div>
            <Image src={Vector3}/>
        </div>
    )
}

export default Layer3;