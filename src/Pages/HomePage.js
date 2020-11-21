import React from 'react';
import "./css/HomeStyle.css"
import imgAvatar from '../images/avatar.jpg';
import {Link, NavLink} from "react-router-dom";
import {motion} from "framer-motion";



const HomePage = () => {
    return (
     <motion.div initial={{opacity: 0}} animate= {{opacity: 1}} exit = {{opacity: 0}}>

            <div className="container">

                <div className="main-text">
                    <img src={imgAvatar} alt=""/>
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
                    <button><i id="github" className="fab fa-github"></i></button>
                    <button><i id="linkedin" className="fab fa-linkedin"></i></button>
                    <button><i id="instagram" className="fab fa-instagram"></i></button>
                    <button><i id="facebook" className="fab fa-facebook"></i></button>
                </div>
                <div className="contact">
                    <NavLink to={"/contact"}><button className="contact-btn">Let's talk</button></NavLink>
                </div>


            </div>

     </motion.div>

    )
}

export default HomePage;
