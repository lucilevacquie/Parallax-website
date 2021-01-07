import React from "react"
import styled from "styled-components"
import Hill from "../../assets/hill.svg"
import Links from "../other/links"

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    width: 479px;
`;

const Div = styled.div`
    position: fixed;
    width: 479px;
    bottom: -240px;
    z-index:2;
`;

const Layer7 = ({myRef}) => {
    return (
    <Container>
        <Div ref={myRef}>
            <Image src={Hill}/>
            <Links/>
        </Div>
    </Container>
    
    )
}

export default Layer7;