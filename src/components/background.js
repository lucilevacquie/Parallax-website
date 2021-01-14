import React from "react"
import styled from "styled-components"
import Parallax from "./parallax"

const Scroller = styled.div`
    height: 5000px; //total x value of the page
    width: 100%;
`
const GridContainer = styled.div`
    display: fixed;
    width: 100%;
    height: 100%;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 479px 1fr;
    height: 100%;
    width: 100%;

    @media (max-width: 479px) {
        grid-template-columns: 0 auto 0;
    }
`
const SideContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`
const SideColor = styled.div`
    width: 100%;
    height: 100%;
    background: #091e52;
    position: absolute;
    z-index: 999;
`



const Background = () => {
    return (
        <Scroller>
            <GridContainer>
                <Grid>
                    <SideContainer>
                        <SideColor />
                    </SideContainer>
                    <Parallax />
                    <SideContainer>
                        <SideColor />
                    </SideContainer>
                </Grid>
            </GridContainer>
        </Scroller>
    )
}

export default Background;