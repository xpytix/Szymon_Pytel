import React, {useState, useEffect} from 'react';
import "./css/PortfolioStyle.css"

import FilterComponentPortfolio from "./PortfolioComponents/FilterComponentPortfolio";
import AudiofileImage from "./imagesCardFilter/audiofile.png";
import KickItImage from "./imagesCardFilter/kick-it.png";
import UserGeneratorImage from "./imagesCardFilter/user-generator.png";
import TimeUpImage from "./imagesCardFilter/timeUp.png";
import PortfolioImage from "./imagesCardFilter/portfolio.png";
import {useSelector} from "react-redux";
import {motion} from "framer-motion";


const PortfolioPage = () => {
    const state = useSelector( (state) => state.activities );
    let styleBtn ={
        backgroundColor: state.button,
    }
    const portfolio = [
        {
            name: "Portfolio",
            category: ["All", "Front-end" ,"ReactJs", "Redux","JavaScript", "HTML5", "CSS", "UI/UX Design"],
            description: "The idea behind this project was to create a showcase of everything I've worked on in the past years. I tried to keep the UI as simple as possible. ",
            image: PortfolioImage,
            href: "https://github.com/xpytix/Audiofile"
        },
        {
            name: "User generator",
            category: ["All","Front-end", "ReactJs","JavaScript" ,"HTML5", "CSS", ],
            description: "User generator is simple app which generates random characters and and enables easy copies of them.",
            image: UserGeneratorImage,
            href: "https://xpytix.github.io/user-generator/"
        },
        {
            name: "Kick It",
            category: ["All", "ReactJs", "JavaScript", "UI/UX Design"],
            description: "App for skaters which generates various tricks of a certain difficulty level. Includes 3 type of game: 4fun; 1Player; 2Player. ",
            image: KickItImage,
            href: "https://xpytix.github.io/kick-it-sk8/"
        },
        {
            name: "TimeUp",
            category: ["All", "JavaScript","HTML5", "CSS", "UI/UX Design"],
            description: "Time Up is a simple app which include stopwatch, timer and Pomodoro technique to learning. I have prepared this application for my mother who is a teacher and often uses similar functions at work. ",
            href: "https://xpytix.github.io/TimeUp/",
            image: TimeUpImage,
        },
        {
            name: "Audiofile",
            category: ["All", "Front-end", "Back-end", "C#", "HTML5", "Bootstrap" ],
            description: "Audiofile - store is a web shop where you can buy some audio stuff. The aim of the project was to understand the MVC model, and to improve skills in ASP .NET technology in the project, I focus on the backend. ",
            href: "https://github.com/xpytix/Audiofile",
            image: AudiofileImage

        },
    ];
    const [filter, setFilter] = useState("All");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(portfolio);
    }, []);

    useEffect(() => {
        setProjects([]);

        const filtered = portfolio.map(p => ({
            ...p,
            filtered: p.category.includes(filter)
        }));
        setProjects(filtered);
    }, [filter]);
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
            <motion.div className="container" initial="out" animate="in" exit ="out"  variants={pageTransition}>
                <div className="menu">
                    <ul className="ks-cboxtags">
                        <li>
                            <motion.a  whileHover={{ scale: 1.2 }} style={styleBtn} active={filter === "All"}
                                onClick={() => setFilter("All")}>
                                All
                            </motion.a>
                        </li>
                        <li>
                            <motion.a  whileHover={{ scale: 1.2 }}
                                style={styleBtn}
                                active={filter === "Front-end"}
                                onClick={() => setFilter("Front-end")}>
                                Frontend
                            </motion.a>
                        </li>
                        <li>
                            <motion.a  whileHover={{ scale: 1.2 }}
                                style={styleBtn}
                                active={filter === "Back-end"}
                                onClick={() => setFilter("Back-end")}>
                                Back-end
                            </motion.a>
                        </li>

                        <li>
                            <motion.a  whileHover={{ scale: 1.2 }}
                                style={styleBtn}
                                active={filter === "ReactJs"}
                                onClick={() => setFilter("ReactJs")}>
                                ReactJs
                            </motion.a>
                        </li>
                        <li>
                            <motion.a  whileHover={{ scale: 1.2 }}
                                style={styleBtn}
                                active={filter === "Redux"}
                                onClick={() => setFilter("Redux")}>
                                Redux
                            </motion.a>
                        </li>
                        <li>
                            <motion.a  whileHover={{ scale: 1.2 }}
                                style={styleBtn}
                                active={filter === "JavaScript"}
                                onClick={() => setFilter("JavaScript")}>
                                JavaScript
                            </motion.a>
                        </li>
                        <li>
                            <motion.a  whileHover={{ scale: 1.2 }}
                                style={styleBtn}
                                active={filter === "HTML5"}
                                onClick={() => setFilter("HTML5")}>
                                HTML5
                            </motion.a>
                        </li>
                        <li>
                            <motion.a  whileHover={{ scale: 1.2 }}
                                style={styleBtn}
                                active={filter === "CSS"}
                                onClick={() => setFilter("CSS")}>
                                CSS
                            </motion.a>
                        </li>
                        <li>
                            <motion.a  whileHover={{ scale: 1.2 }}
                                style={styleBtn}
                                active={filter === "UI/UX Design"}
                                onClick={() => setFilter("UI/UX Design")}>
                                UI/UX Design
                            </motion.a>
                        </li>
                        <li>
                            <motion.a  whileHover={{ scale: 1.2 }}
                                       style={styleBtn}
                                       active={filter === "Photoshop"}
                                       onClick={() => setFilter("Photoshop")}>
                                Photoshop
                            </motion.a>
                        </li>
                        <li>
                            <motion.a  whileHover={{ scale: 1.2 }}
                                       style={styleBtn}
                                       active={filter === "WordPress"}
                                       onClick={() => setFilter("WordPress")}>
                                WordPress
                            </motion.a>
                        </li>
                        <li>
                            <motion.a  whileHover={{ scale: 1.2 }}
                                style={styleBtn}
                                active={filter === "Bootstrap"}
                                onClick={() => setFilter("Bootstrap")}>
                                Bootstrap
                            </motion.a>
                        </li>
                        <li>
                            <motion.a  whileHover={{ scale: 1.2 }}
                                style={styleBtn}
                                active={filter === "C#"}
                                onClick={() => setFilter("C#")}>
                                C#
                            </motion.a>
                        </li>
                    </ul>
                </div>
                <div className="main">
                    {projects.map(item =>
                        item.filtered === true ? <FilterComponentPortfolio name={item.name} image={item.image} description={item.description} href={item.href} /> : null )}
                </div>
            </motion.div>

    );
};

export default PortfolioPage;
