import React from 'react';
import {useSelector} from "react-redux";

const SkillComponent = (props) => {

    const state = useSelector( (state) => state.activities );
    let styleFont ={
        color: state.font,
    }
    return (
        <li
            onClick={()=>props.change(props.skill.id)}
            className={props.skill.name + (props.skill.id === props.activeLink ? " active_item" : "")}>

                   <a  id={props.skill.id}>
                       {

                           props.skill.iconFont.length > 1 ?
                               props.skill.id === props.activeLink ? <i style={{color: "grey"}}  className={props.skill.iconFont}/> : <i className={props.skill.iconFont}/>
                           :
                               props.skill.id === props.activeLink ? <img className="img-skill" src={props.skill.iconBlack} alt=""/> : <img className="img-skill" src={props.skill.iconWhite} alt=""/>

                       }
                       <p style={styleFont}> {props.skill.name}</p>
            </a>
            {props.skill.id === props.activeLink ?
                <div className={"description" + props.skill.name }>
                    <p style={styleFont}>{props.skill.description}</p>
                </div>
                :
                ""
            }
        </li>
    );
};

export default SkillComponent;
