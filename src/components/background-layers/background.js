import React from "react";
import styled from "styled-components";
import Layer1 from "./layer1";
import Layer2 from "./layer2";
import Layer3 from "./layer3";
import Layer4 from "./layer4";
import Layer5 from "./layer5";
import Layer6 from "./layer6";

const Container = styled.div``;

const Background = () => {
    return (
        <Container>
            <Layer1/>
            <Layer2/>
            <Layer3/>
            <Layer4/>
            <Layer5/>
            <Layer6/>
        </Container>
    )
}

export default Background;