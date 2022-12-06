import React from 'react';
import styled from 'styled-components';
import {About} from '../style';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';
import {useScroll} from './useScroll';
import {scrollReveal} from '../animation';


const FaqSection = () =>{
    const [element, controls]= useScroll();
    return(
        <Faq variant={scrollReveal} ref={element} animate={controls} initial="hidden" >
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="How Do I Start?">
                <div classname="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
            </div>
            </Toggle>
            <Toggle title="Daily Schedule">
                <div classname="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        
                    </p>
            </div>
            </Toggle>
            <Toggle title="Payment Methods">
                <div classname="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        
                    </p>
            </div>
            </Toggle>
            <Toggle title="What products Do I Offer?">
                <div classname="answer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        
                    </p>
            </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
display: block;

span{
    display: block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line{
    background : #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
.question{
    padding: 3rem 0rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;

    p{
        padding: 1rem 0rem;
    }
}

`;


export default FaqSection;