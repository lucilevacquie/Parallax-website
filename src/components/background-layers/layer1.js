import React from "react"
import styled from "styled-components"
import Vector1 from "../../assets/Vector1.svg";

const Image = styled.img`
    position: fixed;
    bottom:0;
    z-index:5;
    width: 340px;
`;

const Layer1 = () => {
    return(
        <div>
            <Image src={Vector1}/>
        </div>
    )
}

export default Layer1;