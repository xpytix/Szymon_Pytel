import React from 'react';
import "./App.css";
import Page from "../Pages/Page"
import {connect} from "react-redux";


const Main = ({colors}) => {
    // document.documentElement.style
    //     .setProperty('--bg-gradient-first', colors.bg1);
    // document.documentElement.style
    //     .setProperty('--bg-gradient-second', colors.bg2);
    let mainStyle ={

        color: colors.paragraph,

    }
    let bgGradient={
        backgroundImage: `linearGradient(-60deg,  ${colors.bg1} 50%, ${colors.bg2} 50%)`,

    }
    console.log(bgGradient)
    return (

        <main className="main" style={mainStyle}>
                {/*<div className="bg" style={bgGradient}/>*/}
                {/*<div className="bg bg2"/>*/}
                {/*<div className="bg bg3"/>*/}
                <Page/>
        </main>
    );
};
const connectReduxStateToProps = store => ({
    colors: store.colors,
})

const MainRedux = connect(connectReduxStateToProps)(Main);
export default MainRedux;
