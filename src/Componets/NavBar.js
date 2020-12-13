import React from 'react';
import "./css/NavBarStyle.css";

import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";



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
                <a className="nav-link">
                    <i style={styleButton} className={item.icon}/>
                    <span className="link-text">{item.name}</span>
                </a >
            </NavLink>
        </li>
    ))

    return (
        <nav className="navBar" style={styleNavBar}>
            <ul className="navBar-nav">
                {menu}
                <li className="nav-item">
                    <NavLink to={"/design"}  activeClassName="activeRoute" >
                        <a className="nav-link">
                            <i className="fas fa-palette"/>
                            <span className="link-text">Design it!</span>
                        </a>
                    </NavLink>

                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
