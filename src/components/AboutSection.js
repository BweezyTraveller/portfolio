import React from 'react';
import home1 from '../img/home1.png';
import {About, Description, Image, Hide} from '../style';

//Framer Motion
import {motion} from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const AboutSection = () => {

    return(
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                        I Work To make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Your <span>Dreams</span> Comes </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>True.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact Me For Any <span>Web App</span> And<span> Design</span> Ideas That You Have. I Am Proffessional with amaizing Skills.</motion.p>
                <motion.button variants={fade}>Contact Me</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} /*initial="hidden" animate="show"*/ src={home1} alt="Guy With A Camera" />
            </Image>
            <Wave />
        </About>
    )
}
//styled components

export default AboutSection;