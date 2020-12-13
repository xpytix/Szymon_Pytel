import React, {useEffect, useState} from 'react';
import "./css/AboutMeStyle.css"
import Page1AboutMe from "./AboutMeComponents/Page1AboutME";
import Page3AboutMe from "./AboutMeComponents/Page3AboutME";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_PAGE_DECREMENT, CHANGE_PAGE_INCREMENT} from "../colors/duck/actions";

const DisplayPage =(props) =>{

    const state = useSelector( (state) => state.activities );

    if(state.pageAboutMe === 0){
        return <Page1AboutMe/>
    }
    else if(state.pageAboutMe === 1)
        return <Page3AboutMe/>
    else
        return <Page1AboutMe/>
}

const AboutMePage = () => {
    const state = useSelector( (state) => state.activities );
    const dispatch = useDispatch();
    let styleBtn ={
        backgroundColor: state.body,
    }

    const nextPAge = () => {
        dispatch( {
            type: CHANGE_PAGE_INCREMENT
        } )
    }
    const backPAge = () => {
        dispatch( {
            type: CHANGE_PAGE_DECREMENT
        } )
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div style={styleBtn} className="container-aboutMe">
                    <DisplayPage page={state.pageAboutMe}/>
                    <div className="sliderPage">
                        {
                            state.pageAboutMe > 0 ?  <button onClick={backPAge} style={styleBtn} className="slideBtn">
                                <i className="fas fa-chevron-left"></i>
                            </button> : ""
                        }

                    <p className="textPage">{state.pageAboutMe}/1</p>
                        {
                            state.pageAboutMe <1 ? <button onClick={nextPAge} style={styleBtn} className="slideBtn">
                                <i  className="fas fa-chevron-right"></i>
                            </button> : ""
                        }

                </div>
            </div>
        </>
    );
};

export default AboutMePage;
