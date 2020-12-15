import React from 'react';
import "./css/MainStyle.css";
import Page from "../Pages/Page"
import {motion} from "framer-motion";
import {useSelector} from "react-redux";



const Main = (router) => {

    const state = useSelector( (state) => state.activities );
    let style = {
        backgroundColor: state.body
    }
    return (

        <main className="main" style={style}>

                <Page/>

        </main>
    );
};

export default Main;
