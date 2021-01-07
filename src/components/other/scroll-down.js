import React from "react"
import styled from "styled-components"
import Arrow from "../../assets/arrow-down.svg"

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const DownArrow = styled.img`
    position: fixed;
    width: 95px;
    top: 40px;
    z-index: 2;
`;

const ScrollDown = ({myRef}) => {
    return(
        <Container>
            <DownArrow ref={myRef} src={Arrow}/>
        </Container>
    
    )
}

export default ScrollDown;