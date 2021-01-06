import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import Layer1 from "./layer1";
import Layer2 from "./layer2";
import Layer3 from "./layer3";
import Layer4 from "./layer4";
import Layer5 from "./layer5";
import Layer6 from "./layer6";

const Container = styled.div`
    height: 2000px;
`;

const multipliers = {
    layer1: -1,
    layer2: 0.6,
    layer3: -0.4,
    layer4: {
        scale: 0.002,
        y: 0.07
    },
    layer5: 0.09
}

const Background = () => {
    
    const refLayer1 = useRef()
    const refLayer2 = useRef()
    const refLayer3 = useRef()
    const refLayer4 = useRef()
    const refLayer5 = useRef()

    const updateXPosition = (ref, multiplier, currentScrollPosition) => {
        ref.style.transform = `translate3d( ${currentScrollPosition*multiplier}px, 0, 0)`
    }

    const updateYPosition = (ref, multiplier, currentScrollPosition) => {
        ref.style.transform = `translate3d( 0, ${currentScrollPosition*multiplier}px, 0)`
    }

    const updateScale = (ref, multiplier, currentScrollPosition) => {
        console.log(ref);
        ref.style.transform = `scale3d(${1 + currentScrollPosition*multiplier}, ${1 + currentScrollPosition*multiplier}, 1)`
    }

    const updatePositionsOfSVGS = (pos) => {
        console.log(refLayer1)
        updateXPosition(refLayer1.current, multipliers.layer1, pos)
        updateXPosition(refLayer2.current, multipliers.layer2, pos)
        updateXPosition(refLayer3.current, multipliers.layer3, pos)
        updateScale(refLayer4.current, multipliers.layer4.scale, pos)
        updateYPosition(refLayer4.current, multipliers.layer4.y, pos)
        updateXPosition(refLayer5.current, multipliers.layer5, pos)
    }

    useEffect(() => {
        const callbackFunc = (event) => {
            const currentScrollPosition = window.scrollY;

            setTimeout(() => {
                updatePositionsOfSVGS(currentScrollPosition);
            }, 0)
        }

        document.addEventListener("scroll", callbackFunc)

        return () => { document.removeEventListener("scroll", callbackFunc)}
    }, [])

    return (
        <Container>
            <Layer1 myRef={refLayer1} />
            <Layer2 myRef={refLayer2}/>
            <Layer3 myRef={refLayer3}/>
            <Layer4 myRef={refLayer4}/>
            <Layer5 myRef={refLayer5}/>
            <Layer6/>
        </Container>
    )
}

export default Background;