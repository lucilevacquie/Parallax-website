import React from "react"
import styled from "styled-components"
import MeSitting from "../../assets/me-sitting.svg"

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    position: fixed;
    width: 250px;
    bottom: -100px;
    z-index: 3;
`;

const Layer6 = ({myRef}) => {
    return (
    <Container>
        <Image ref={myRef} src={MeSitting}/>
    </Container>
    
    )
}

export default Layer6;