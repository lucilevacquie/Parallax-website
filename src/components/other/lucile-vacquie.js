import React from "react"
import styled from "styled-components"
import LucileVacquie from "../../assets/lucile-vacquie.svg"

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Title = styled.img`
    position: fixed;
    z-index: 2;
    width: 300px;
    top: -300px;
`;

const MyName = ({myRef}) => {
    return(
        <Container>
            <Title ref={myRef} src={LucileVacquie}/>
        </Container>
    )
}

export default MyName;