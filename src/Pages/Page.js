import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import HomePage from "./HomePage"
import PortfolioPage from "./PortfolioPage";
import SkillsPage from "./SkillsPage";
import ContactPage from "./ContactPage";


const Page = () => {
    return (
        <>
            <AnimatePresence>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/portfolio" component={PortfolioPage}/>
                    <Route path="/skills" component={SkillsPage}/>
                    <Route path="/contact" component={ContactPage}/>
                    <Route  component={ContactPage}/>
                </Switch>
            </AnimatePresence>
        </>
    );
};

export default Page;
