import React from "react"
import styled from "styled-components"
import Parallax from "./parallax"

const Wrapper = styled.div`
    height: 100vh;
    width: 476px;
    background-color: red;
    margin: auto;
`;

const Background = () => {
    return(
    <Wrapper>
        <Parallax/>
    </Wrapper>
    )
}

export default Background;