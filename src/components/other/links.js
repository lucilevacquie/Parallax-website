import React from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 2;
    bottom: 40px;
    position: fixed;
    flex-direction: column;
    text-align: center;
`;

const Link = styled.a`
    text-decoration: none;
    color: darkblue;
    font-family: 'Quicksand', sans-serif;
    padding: 5px;
`;

const Links = () => {
    return(
        <Container>
            <Link href="https://www.linkedin.com/in/lucile-vacqui%C3%A929/" target="_blank">LinkedIn</Link>
            <Link href="https://github.com/lucilevacquie" target="_blank">GitHub</Link>
            <Link href="https://resume.lucilevacquie.com/" target="_blank">Personal website</Link>
        </Container>
    )
}

export default Links;