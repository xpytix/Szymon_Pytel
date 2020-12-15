import React from 'react';
import "./css/HomeStyle.css"
import imgAvatar from '../images/avatar.jpg';

import {Link, NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";

const HomePage = () => {


    const state = useSelector( (state) => state.activities );

    let styleBody = {
        backgroundColor: state.body
    }
    let styleBtn ={
        color: state.button,
    }
    let styleBtnConnect ={
        backgroundColor: state.button,
    }

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


            <motion.div className="container" initial="out" animate="in" exit ="out"  variants={pageTransition}>
                <div className="main-text">
                    <motion.img src={imgAvatar} alt=""
                    initial="hidden" animate="visible" variants={{
                        hidden:{
                            scale: .8,
                            opacity: 0
                        },
                        visible:{
                            scale:1,
                            opacity:1,
                            transition:{
                                delay: .4
                            }
                        }
                    }}
                    />
                    <h1>Hello.
                        I am Simon
                    </h1>
                    <div className="text-wrapper">
                        <span className="box b1">Web developer</span>
                        <span className="box b2">Desinger</span>
                        <span className="box b3">Minimalist Person</span>
                        <span className="box b4">Skateboard lover</span>
                    </div>
                </div>

                <div className="socialBtn">
                    <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={styleBody}>
                        <i style={styleBtn} id="github" className="fab fa-github"></i>
                    </motion.button>

                    <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}  style={styleBody}>
                        <i style={styleBtn} id="linkedin" className="fab fa-linkedin"></i>
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={styleBody}>
                        <i style={styleBtn} id="instagram" className="fab fa-instagram"></i>
                    </motion.button>
                    <motion.button  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={styleBody}>
                        <i style={styleBtn} id="facebook" className="fab fa-facebook"></i>
                    </motion.button>
                </div>
                <motion.div className="contact"   whileTap={{ scale: 1 }} whileHover={{scale: 1.2 , transition: { duration: .2}}}>
                    <NavLink to={"/contact"}><button style={styleBtnConnect} className="contact-btn">Let's talk</button></NavLink>
                </motion.div>

            </motion.div>
    )
}

export default HomePage;
