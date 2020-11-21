import React from 'react';
import "./App.css";

import { connect } from 'react-redux';
import {changeColor} from "../colors/duck/actions";
import {NavLink} from "react-router-dom";



const list =[
    {name: "Home", path: "/", exact: true, icon: "fas fa-home" },
    {name: "Portfolio", path: "/portfolio", icon: "fas fa-address-card"},
    {name: "Skills", path: "/skills", icon: "fas fa-graduation-cap"},
    {name: "Contact", path: "/contact", icon: "far fa-envelope"},
]
const NavBar = ({changeColor, colors}) => {


    let navStyle ={
        backgroundColor: colors.navBar
    }
    const menu = list.map(item => (
        <li className="nav-item" key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact: false} activeClassName="activeRoute" >
                <a className="nav-link">
                    <i className={item.icon}/>
                    <span className="link-text">{item.name}</span>
                </a>
            </NavLink>
        </li>
    ))
    return (
        <nav className="navBar" style={navStyle}>
            <ul className="navBar-nav">
                {menu}
                <li className="nav-item" onClick={changeColor}>
                    <a className="nav-link">
                        <i className="fas fa-palette"/>
                        <span className="link-text">Design it!</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
const connectReduxStateToProps = store => ({
    colors: store.colors,
})
const connectReduxActionToProps = ({
    changeColor
});

const NavBardRedux = connect(connectReduxStateToProps, connectReduxActionToProps)(NavBar);

export default NavBardRedux;
