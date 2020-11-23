import React, {useState} from 'react';
import "./css/SkillsStyle.css"
import reduxWhiteIcon from "../icon/icon-redux-white.png"
import reduxBlackIcon from "../icon/icon-redux-black.png"
import cSharpWhiteIcon from "../icon/icons8-c++-white.png"
import cSharpBlackIcon from "../icon/icons8-c++-black.png"
import figmaBlackIcon from "../icon/icons8-figma-black.png"
import figmaWhiteIcon from "../icon/icons8-figma-white.png"
import visualBlackIcon from "../icon/icons8-visual-studio-logo-white.png"
import visualWhiteIcon from "../icon/icons8-visual-studio-logo-100.png"
import psWhiteIcon from "../icon/icons8-adobe-photoshop-white.png"
import psBlackIcon from "../icon/icons8-adobe-photoshop-black.png"
import premiereProBlackIcon from "../icon/icons8-adobe-premiere-pro-black.png"
import gitWhiteIcon from "../icon/icons8-git-white.png"
import gitBlackIcon from "../icon/icons8-git-black.png"
import webBlackIcon from "../icon/webstorm-icon-logo-black-and-white.png"
import webWhiteIcon from "../icon/webstorm-icon-logo-png-transparent.png"
const SkillsPage = () => {

    const listSkills =[
        {name: "JavaScript",icon: "", iconFont: "fab fa-js" },
        {name: "ReactJs",icon: "", iconFont: "fab fa-react"},
        {name: "Redux", icon: reduxWhiteIcon,iconFont: ""},
        {name: "C#", icon: cSharpWhiteIcon,iconFont: ""},
        {name: "other",icon: "", iconFont:"fas fa-question"},

    ]
    const listTools =[
        {name: "PhotoShop", icon: psWhiteIcon, iconFont: ""},
        {name: "WebStorm", icon:  webWhiteIcon,iconFont: ""},
        {name: "PremierePro", icon: premiereProBlackIcon,iconFont: ""},
        {name: "VisualStudio", icon: visualWhiteIcon,iconFont: ""},
        {name: "Figma", icon: figmaWhiteIcon,iconFont: ""},
        {name: "Git", icon: gitWhiteIcon ,iconFont: ""},
        {name: "other",  icon: "" , iconFont:"fas fa-question"},

    ]
    const skills = listSkills.map(skill => (
        <li ><a> { skill.iconFont.length > 1 ? <i className={skill.iconFont}/> : <img className="img-skill" src={skill.icon} alt=""/>  }{skill.name} </a> </li>
    ))
    const tools = listTools.map(tool => (
        <li ><a> { tool.iconFont.length > 1 ? <i className={tool.iconFont}/> : <img className="img-skill" src={tool.icon} alt=""/>  }{tool.name} </a> </li>
    ))
    return (
        <div className="container-skills">
            <div className="main-text-skills">
                <p> I am a 3rd year student of Industrial Computer Science at the Silesian University of Technology at the Faculty of Materials Science and Metallurgy
                I am passionate about creating stylish and easy-to-use websites that improve the quality of life for the people around me.
                </p>
            </div>
            <div className="main-skills">
                <div className="column skills">
                    <ul>
                        {skills}
                    </ul>
                </div>
                <div className="column tools">
                  <ul>
                      {tools}
                  </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillsPage;
