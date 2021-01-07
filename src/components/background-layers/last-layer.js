import React from "react"
import styled from "styled-components"
import Frame6 from "../../assets/Frame6.svg"

const Image = styled.img`
    position: fixed;
    height:100vh;
`;

const LastLayer = () => {
    return(
        <div>
            <Image src={Frame6}/>
        </div>
    )
}

export default LastLayer;