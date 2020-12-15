import React, {useEffect} from 'react';
import "../css/AboutMeStyle.css"
import imgMe from "./images/AboutMe.jpg"
import {useSelector} from "react-redux";
import {motion} from "framer-motion";

const Page1AboutMe = () => {
    const state = useSelector( (state) => state.activities );
    let styleFont ={
        color: state.font,
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let pageTransition = {
        in: {
            opacity: 1,
            y: 0
        },
        out:{
            opacity: 0,
            y: "-100vh"
        }
    };
    return (
        <>
        <motion.div initial="out" animate="in" exit ="out"  variants={pageTransition} className="wrapper-aboutMe">
            <h1 className="titleAboutME">About me</h1>

            <img className="imageMe" src={imgMe} alt="me"/>
            <div style={styleFont} className="textAboutMe">
                I am a 3rd year student of Industrial Computer Science at the Silesian University of Technology at the Faculty of Materials Science and Metallurgy I am passionate about creating stylish and easy-to-use websites that improve the quality of life for the people around me.
            </div>
        </motion.div>
            <div className="quote">
                <p style={styleFont}>“<cite>My favorite things in life don’t cost any money. It’s really clear that the most precious resource we all have is time.</cite>” <br/>- Steve Jobs</p>
            </div>

        </>
    );
};

export default Page1AboutMe;
