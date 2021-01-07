import React from "react"
import styled from "styled-components"
import Hill from "../../assets/hill.svg"

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    position: fixed;
    width: 479px;
    bottom: -240px;
    z-index:1;
`;

const Layer7 = ({myRef}) => {
    return (
    <Container>
        <Image ref={myRef} src={Hill}/>
    </Container>
    
    )
}

export default Layer7;