import React from 'react';
import {useSelector} from "react-redux";

const ToolComponent = (props) => {
    const state = useSelector( (state) => state.activities );
    let styleFont ={
        color: state.font,
    }
    return (
        <li
            onClick={()=>props.change(props.tool.id)}
            className={props.tool.name + (props.tool.id === props.activeLink ? " active_item" : "")}>

            <a id={props.tool.id}>
                {

                    props.tool.iconFont.length > 1 ?
                        props.tool.id === props.activeLink ? <i style={{color: "grey"}}  className={props.tool.iconFont}/> : <i className={props.tool.iconFont}/>
                        :
                        props.tool.id === props.activeLink ? <img className="img-skill" src={props.tool.iconBlack} alt=""/> : <img className="img-skill" src={props.tool.iconWhite} alt=""/>

                }
                <p style={styleFont}> {props.tool.name}</p>

            </a>
            {props.tool.id === props.activeLink ?
                <div className={"description" + props.tool.name }>

                    <p style={styleFont}> {props.tool.description}</p>
                </div>
                :
                ""
            }
        </li>
    );
};

export default ToolComponent;
