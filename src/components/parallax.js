import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Layer1 from "./background-layers/layer1";
import Layer2 from "./background-layers/layer2";
import Layer3 from "./background-layers/layer3";
import Layer4 from "./background-layers/layer4";
import Layer5 from "./background-layers/layer5";
import Layer6 from "./background-layers/layer6";
import Layer7 from "./background-layers/layer7";
import LastLayer from "./background-layers/last-layer";
import ScrollDown from "./other/scroll-down";
import MyName from "./other/lucile-vacquie";

const Container = styled.div`
    position: relative;
`;

//multipliers define the speed and the direction (minus to the left) of each element
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
    layer7: -0.05,
    scrollDown: -0.12,
    myName: 0.12,
}

//set a max position to stop the element from moving
const maxXLayer5 = 130;
const maxYLayer6 = 160;
const maxYLayer7 = 100;
const maxYMyName = 420;

const Parallax = () => {

    const refLayer1 = useRef()
    const refLayer2 = useRef()
    const refLayer3 = useRef()
    const refLayer4Translate = useRef()
    const refLayer5 = useRef()
    const refLayer6 = useRef()
    const refLayer7 = useRef()
    const refScrollDown = useRef()
    const refMyName = useRef()

    //function which allows elements to move on x axe (horizontal)
    const updateXPosition = (ref, multiplier, currentScrollPosition, maxX) => {
        let position = currentScrollPosition * multiplier
        //if the element present a max x position, set the position to max x position
        if (maxX && position > maxX) {
            position = maxX
        }
        //translate3d(x, y, z) so here we're updating the first value
        ref.style.transform = `translate3d( ${position}px, 0, 0)`
    }

    //function which allows elements to move on y axe (vertical)
    //takes 3 required arguments and 1 optional (max position)
    const updateYPosition = (ref, multiplier, currentScrollPosition, maxY) => {
        let position = currentScrollPosition * multiplier
        //if the element present a max y position, set the position to max y position
        if (maxY && position > maxY) {
            position = maxY
        }
        //translate3d(x, y, z) so here we're updating the second value
        ref.style.transform = `translate3d( 0, ${position}px, 0)`
    }

    //using a useEffect because we want the event listener to run just once each time we scroll
    useEffect(() => {
        const updatePositionsOfSVGS = (pos) => {
            updateXPosition(refLayer1.current, multipliers.layer1, pos)
            updateXPosition(refLayer2.current, multipliers.layer2, pos)
            updateXPosition(refLayer3.current, multipliers.layer3, pos)
            updateYPosition(refLayer4Translate.current, multipliers.layer4.y, pos)
            updateXPosition(refLayer5.current, multipliers.layer5, pos, maxXLayer5)
            updateYPosition(refLayer6.current, multipliers.layer6, pos, maxYLayer6)
            updateYPosition(refLayer7.current, multipliers.layer7, pos, maxYLayer7)
            updateYPosition(refScrollDown.current, multipliers.scrollDown, pos)
            updateYPosition(refMyName.current, multipliers.myName, pos, maxYMyName)
        }

        const callbackFunc = (event) => {
            //scroll position
            const currentScrollPosition = window.scrollY;

            //called on every browser tick (60 times/second)
            setTimeout(() => {
                updatePositionsOfSVGS(currentScrollPosition);
            }, 0) //synchronise with browser tick (doesn't wait)
        }

        //want to trigger the callbackFunc once every time we scroll
        document.addEventListener("scroll", callbackFunc)

        //need to turn it of not to add an event listener on every run
        return () => { document.removeEventListener("scroll", callbackFunc) }
    }, [])

    return (
        <Container>
            <Layer1 myRef={refLayer1} />
            <Layer2 myRef={refLayer2} />
            <Layer3 myRef={refLayer3} />
            <Layer4 myRef={refLayer4Translate} />
            <Layer5 myRef={refLayer5} />
            <Layer6 myRef={refLayer6} />
            <Layer7 myRef={refLayer7} />
            <ScrollDown myRef={refScrollDown} />
            <MyName myRef={refMyName} />
            <LastLayer />
        </Container>
    )
}

export default Parallax;