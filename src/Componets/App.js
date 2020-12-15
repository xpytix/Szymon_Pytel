import React from "react";

import NavBar from "./NavBar";
import Main from "./Main";
import "./css/App.css";
import {motion} from "framer-motion";

const App =({router})=>{
        return (
            <div className="App">
                <NavBar/>
                <motion.div  initial="pageInitial" animate="pageAnimate" variants={{
                    pageInitial:{
                        opacity: 0
                    },
                    pageAnimate:{
                        opacity:1
                    },
                }}>
                <Main/>
                </motion.div>
            </div>

        );
}

export default App;
