import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import Layer1 from "./layer1";
import Layer2 from "./layer2";
import Layer3 from "./layer3";
import Layer4 from "./layer4";
import Layer5 from "./layer5";
import Layer6 from "./layer6";
import Layer7 from "./layer7";
import LastLayer from "./last-layer";

const Container = styled.div`
    height: 5000px;
`;

const multipliers = {
    layer1: -0.6,
    layer2: 0.3,
    layer3: -0.3,
    layer4: {
        scale: 0.002,
        y: 0.12
    },
    layer5: 0.03,
    layer6: -0.05,
    layer7: -0.05
}

const maxXLayer5 = 130;
const maxYLayer6 = 160;
const maxYLayer7 = 100;

const Background = () => {
    
    const refLayer1 = useRef()
    const refLayer2 = useRef()
    const refLayer3 = useRef()
    // const refLayer4Scale = useRef()
    const refLayer4Translate = useRef()
    const refLayer5 = useRef()
    const refLayer6 = useRef()
    const refLayer7 = useRef()

    const updateXPosition = (ref, multiplier, currentScrollPosition, maxX) => {
        let position = currentScrollPosition*multiplier
        if(maxX && position > maxX){
            position = maxX
        }
        ref.style.transform = `translate3d( ${position}px, 0, 0)`
    }

    const updateYPosition = (ref, multiplier, currentScrollPosition, maxY) => {
        let position = currentScrollPosition*multiplier
        if(maxY && position > maxY){
            position = maxY
        }
        ref.style.transform = `translate3d( 0, ${position}px, 0)`
    }

    // const updateScale = (ref, multiplier, currentScrollPosition) => {
    //     console.log(ref);
    //     ref.style.transform = `scale3d(${1 + currentScrollPosition*multiplier}, ${1 + currentScrollPosition*multiplier}, 1)`
    // }

    const updatePositionsOfSVGS = (pos) => {
        console.log(refLayer1)
        updateXPosition(refLayer1.current, multipliers.layer1, pos)
        updateXPosition(refLayer2.current, multipliers.layer2, pos)
        updateXPosition(refLayer3.current, multipliers.layer3, pos)
        // updateScale(refLayer4Scale.current, multipliers.layer4.scale, pos)
        updateYPosition(refLayer4Translate.current, multipliers.layer4.y, pos)
        updateXPosition(refLayer5.current, multipliers.layer5, pos, maxXLayer5)
        updateYPosition(refLayer6.current, multipliers.layer6, pos, maxYLayer6)
        updateYPosition(refLayer7.current, multipliers.layer7, pos, maxYLayer7)
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
            {/* <div ref={refLayer4Translate}> */}
                <Layer4 myRef={refLayer4Translate}/>
            {/* </div> */}
            <Layer5 myRef={refLayer5}/>
            <Layer6 myRef={refLayer6}/>
            <Layer7 myRef={refLayer7}/>
            <LastLayer/>
        </Container>
    )
}

export default Background;