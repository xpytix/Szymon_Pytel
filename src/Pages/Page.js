import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import HomePage from "./HomePage"
import PortfolioPage from "./PortfolioPage";
import Page3AboutME from "./AboutMeComponents/Page3AboutME";
import ContactPage from "./ContactPage";
import DesignPage from "./DesignPage";
import AboutMePage from "./AboutMePage";


const Page = () => {
    return (
        <>
            <AnimatePresence>
                <Switch>
                    <Route path="/Szymon_Pytel" exact component={HomePage}/>
                    <Route path="/portfolio" component={PortfolioPage}/>
                    <Route path="/aboutMe" component={AboutMePage}/>
                    <Route path="/contact" component={ContactPage}/>
                    <Route path="/design" component={DesignPage}/>
                    <Route  component={ContactPage}/>
                </Switch>s
            </AnimatePresence>
        </>
    );
};

export default Page;
