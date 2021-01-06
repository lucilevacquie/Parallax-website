import React from "react"
import styled from "styled-components"
import Frame6 from "../../assets/Frame6.svg"

const Image = styled.img`
    position: fixed;
    width: 479px;
`;

const Layer6 = () => {
    return(
        <div>
            <Image src={Frame6}/>
        </div>
    )
}

export default Layer6;