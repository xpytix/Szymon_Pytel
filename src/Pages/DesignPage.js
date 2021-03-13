import React, {useState} from 'react';
import "./css/DesingStyle.css"
import {CHANGE_BODY, CHANGE_BUTTON, CHANGE_FONT, CHANGE_NAVBAR} from "../colors/duck/actions";
import { useSelector,useDispatch} from "react-redux";
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import {motion} from "framer-motion";


const colorsArray =
    ['#23232e', '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

const DesignPage = () => {

    const state = useSelector( (state) => state.activities );
    const dispatch = useDispatch();

    const [sliderNavBarValue, setSliderValue] = useState();
    const [sliderBodyValue, setSliderBodyValue] = useState( );
    const [sliderButtonValue, setSliderButtonValue] = useState();
    const [sliderFontValue, setSliderFontValue] = useState( );

    let styleButton = {
        color: state.button
    }
    let styleBody = {
        color: state.body
    }
    let styleNavBar = {
        color: state.navBar
    }
    let styleFont = {
        color: state.font
    }

    console.log(state)
    const handleChangeNavBar = (e, newValue) => {
        const color = colorsArray[newValue];
        setSliderValue( color );
        addNavBarColor();
    }
    const handleChangeBody = (e, newValue) => {
        const color = colorsArray[newValue];
        setSliderBodyValue( color );
        addBodyColor();
    }
    const handleChangeButton = (e, newValue) => {
        const color = colorsArray[newValue];
        setSliderButtonValue( color );
        addButtonColor();
    }
    const handleChangeFont = (e, newValue) => {
        const color = colorsArray[newValue];
        setSliderFontValue( color );
        addFontColor();
    }
    const addNavBarColor = () => {
        dispatch( {
            type: CHANGE_NAVBAR,
            payload:
                {
                    navBar: sliderNavBarValue,
                }
        } )
    }
    const addBodyColor= () => {
        dispatch( {
            type: CHANGE_BODY,
            payload:
                {
                    body: sliderBodyValue
                }
        } )
    }
    const addButtonColor= () => {
        dispatch( {
            type: CHANGE_BUTTON,
            payload:
                {
                    button: sliderButtonValue
                }
        } )
    }
    const addFontColor= () => {
        dispatch( {
            type: CHANGE_FONT,
            payload:
                {
                    font: sliderFontValue
                }
        } )
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
            <motion.div  initial="out" animate="in" exit ="out"  variants={pageTransition} className="sliderContainer" >

            <h1 style={styleBody}>Body</h1>
            <Slider
                min={0}
                max={colorsArray.length -1 }
                step={1}
                aria-labelledby="non-linear-slider"
                onChange={handleChangeBody}
                defaultValue={25}

            />

            <h1 style={styleNavBar}>NavBar </h1>
            <Slider
                min={0}
                max={colorsArray.length - 1}
                step={1}
                aria-labelledby="non-linear-slider"
                onChange={handleChangeNavBar}
                defaultValue={25}
            />

            <h1 style={styleButton}>Buttons</h1>
            <Slider
                min={0}
                max={colorsArray.length}
                step={1}
                aria-labelledby="non-linear-slider"
                onChange={handleChangeButton}
                defaultValue={25}
            />
            <h1 style={styleFont}>Font</h1>
            <Slider
                min={0}
                max={colorsArray.length}
                step={1}
                aria-labelledby="non-linear-slider"
                onChange={handleChangeFont}
                defaultValue={25}
            />


            </motion.div>
    );
};

export default DesignPage;
