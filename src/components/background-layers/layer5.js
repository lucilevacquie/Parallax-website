import React from "react"
import styled from "styled-components"
import Vector5 from "../../assets/Vector5.svg"

const Image = styled.img`
    position: fixed;
    z-index:1;
    width: 106px;
    top: 2.5rem;
    left: 2.5rem;
`;

const Layer5 = () => {
    return(
        <div>
            <Image src={Vector5}/>
        </div>
    )
}

export default Layer5;