import React, {useEffect, useState} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import InfoComponentSkills from "./InfoComponentSkills";

import "../css/Page3Style.css"
import reduxWhiteIcon from "./icon/icon-redux-white.png"
import reduxBlackIcon from "./icon/icon-redux-black.png"
import cSharpWhiteIcon from "./icon/icons8-c++-white.png"
import cSharpBlackIcon from "./icon/icons8-c++-black.png"
import figmaBlackIcon from "./icon/icons8-figma-black.png"
import figmaWhiteIcon from "./icon/icons8-figma-white.png"
import visualBlackIcon from "./icon/icons8-visual-studio-logo-white.png"
import visualWhiteIcon from "./icon/icons8-visual-studio-logo-100.png"
import psWhiteIcon from "./icon/icons8-adobe-photoshop-white.png"
import psBlackIcon from "./icon/icons8-adobe-photoshop-black.png"
import premiereProBlackIcon from "./icon/icons8-adobe-premiere-pro-black.png"
import premiereProWhiteIcon from "./icon/icons8-adobe-premiere-pro-50.png"
import gitWhiteIcon from "./icon/icons8-git-white.png"
import gitBlackIcon from "./icon/icons8-git-black.png"
import webBlackIcon from "./icon/webstorm-icon-logo-black-and-white.png"
import webWhiteIcon from "./icon/webstorm-icon-logo-png-transparent.png"
import {forEach} from "react-bootstrap/ElementChildren";
import SkillComponent from "./SkillComponent"
import ToolComponent from "./ToolComponent";
import {useSelector} from "react-redux";

const Page3AboutME = () => {
    const state = useSelector( (state) => state.activities );
    let styleFont ={
        color: state.font,
    }
    const [listSkills, setListSkills]= useState([
        {id: 1, name: "JavaScript",iconWhite:"", iconBlack: "",  iconFont: "fab fa-js", description:" bla bla blaa?"},
        {id: 2, name: "ReactJs",iconWhite: "", iconBlack: "",  iconFont: "fab fa-react",description:" bla bla blaa?"},
        {id: 3, name: "Redux", iconWhite: reduxWhiteIcon , iconBlack: reduxBlackIcon, iconFont: "",description:" bla bla blaa?"},
        {id: 4, name: "C#", iconWhite: cSharpWhiteIcon, iconBlack: cSharpBlackIcon, iconFont: "", description:" bla bla blaa?"},
        {id: 5, name: "otherSkill",iconWhite: "", iconBlack: "",  iconFont:"fas fa-question", description:" bla bla blaa?"}])

    const [listTools, setlistTools]= useState([

        {id: 1, name: "PhotoShop", iconWhite: psWhiteIcon, iconBlack: psBlackIcon, iconFont: "",description:" bla bla blaa?"},
        {id: 2, name: "WebStorm", iconWhite:  webBlackIcon, iconBlack: webWhiteIcon, iconFont: "", description:" bla bla blaa?"},
        {id: 3, name: "PremierePro", iconWhite: premiereProWhiteIcon, iconBlack: premiereProBlackIcon, iconFont: "",description:" bla bla blaa?"},
        {id: 4,  name: "VisualStudio", iconWhite: visualBlackIcon, iconBlack: visualWhiteIcon, iconFont: "", description:" bla bla blaa?"},
        {id: 5, name: "Figma", iconWhite: figmaWhiteIcon, iconBlack: figmaBlackIcon, iconFont: "", description:" bla bla blaa?"},
        {id: 6, path: "/git", name: "Git", iconWhite: gitWhiteIcon , iconBlack: gitBlackIcon, iconFont: "", description:" bla bla blaa?"},
        {id: 7,  path: "/otherTools", name: "other",  iconWhite: "" , iconBlack: "",  iconFont:"fas fa-question", description:" bla bla blaa?"}])

    const [activeSkill, setActiveSkill] = useState();
    const [activeTools, setActiveTool] = useState();

    const handleClickSkill = (id) => {
       if(id ===activeSkill){
           setActiveSkill(prevState => null)
       }
       else
           setActiveSkill(prevState => id)


    };
    const handleClickTools = (id) => {
        if(id ===activeTools){
            setActiveTool(prevState => null)
        }
        else
            setActiveTool(prevState => id)

    };

    const skills = listSkills.map(skill => (<SkillComponent key={skill.id} skill={skill} activeLink={activeSkill} change={handleClickSkill} />) )

    const tools = listTools.map(tool => (<ToolComponent key={tool.id} tool={tool} activeLink={activeTools} change={handleClickTools} />) )

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="container-skills-tools">

            <div className="main-skills-tools">

                <div className="column skills">
                        <h2 style={styleFont}>Skills</h2>
                        <ul>
                            {skills}
                        </ul>
                </div>
                <div className="column tools">
                    <h2 style={styleFont}>Tools</h2>
                    <ul>
                            {tools}
                        </ul>
                </div>

            </div>

        </div>
    );
};

export default Page3AboutME;
