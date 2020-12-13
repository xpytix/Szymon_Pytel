import React from 'react';

import "../css/FilterStyle.css"
import {useSelector} from "react-redux";



const FilterComponentPortfolio = ({name, description, href, image}) => {

    const state = useSelector( (state) => state.activities );
    let styleBtn ={
        backgroundColor: state.button,
    }
    return (
            // <div className="wrapper">
            //     <div className="card">
            //         <img className="card-img" src={img} alt=""/>
            //         <div className="card-text">
            //             <h2>{props.name}</h2>
            //             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores exercitationem facere in incidunt maxime, minus necessitatibus, nemo nostrum, pariatur rerum sapiente suscipit! Consectetur dicta distinctio ipsam obcaecati sit ullam vero.</p>
            //         </div>
            //         </div>
            // </div>
        <div className="card" key={name}>
            <div className="flip-card-container">
                <div className="flip-card">
                    <div className="flip-card-front">
                        <img src={image} alt={"card-"+ name}/>
                    </div>
                    <div style={styleBtn} className="flip-card-back">
                        <h1>{name}</h1>
                        <p>
                            {description}
                        </p>
                        <a href={href} target="_blank" className="btn-code">See more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterComponentPortfolio;
