import React from 'react';
import "./css/NavBarStyle.css";

import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { motion } from "framer-motion"



const list =[
    {name: "Home", path: "/Szymon_Pytel", exact: true, icon: "fas fa-home" },
    {name: "Portfolio", path: "/portfolio", icon: "fas fa-address-card"},
    {name: "About Me", path: "/aboutMe", icon: "fas fa-graduation-cap"},
    {name: "Contact", path: "/contact", icon: "far fa-envelope"},
]
const NavBar = () => {
    const state = useSelector( (state) => state.activities );
    let styleNavBar = {
        backgroundColor: state.navBar
    }
    let styleButton = {
        color: state.button
    }

    const menu = list.map(item => (
        <li className="nav-item" key={item.name}>
            <NavLink className={"test"} activeStyle={{color: "red"}}  key={item.name} to={item.path} exact={item.exact ? item.exact: false} activeClassName="activeRoute" >
                <motion.a  whileTap={{ scale: 1.1 }} className="nav-link">
                    <i style={styleButton} className={item.icon}/>
                    <span className="link-text">{item.name}</span>
                </motion.a >
            </NavLink>
        </li>
    ))

    return (
        <motion.nav initial={{y: -250}} animate={{y: 0}}
            className="navBar" style={styleNavBar}>
            <ul className="navBar-nav">
                {menu}
                <li className="nav-item">
                    <NavLink to={"/design"}  activeClassName="activeRoute" >
                        <motion.a  whileTap={{ scale: 1.3 }} className="nav-link">
                            <i className="fas fa-palette"/>
                            <span className="link-text">Design it!</span>
                        </motion.a>
                    </NavLink>

                </li>
            </ul>
        </motion.nav>
    );
};

export default NavBar;
