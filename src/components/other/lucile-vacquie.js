import React from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Text = styled.div`
    z-index: 2;
    position: fixed;
    margin: auto;
    top: -250px;
    text-align: center;
`;

const Title = styled.p`
    font-family: 'Quicksand', sans-serif;
    color: #FEAA3B;
    font-size: 30px;
    margin:0;
`;

const Subtitle = styled.p`
    font-family: 'Shorelines';
    color: #FD6041;
    margin:0;
`;

const MyName = ({myRef}) => {
    return(
        <Container>
            <Text ref={myRef}>
                <Title>Lucile Vacquie</Title>
                <Subtitle>Front End Developer</Subtitle>
            </Text>
        </Container>
    )
}

export default MyName;