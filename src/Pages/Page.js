import {React} from 'react';
import { Route, Switch,useLocation } from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import HomePage from "./HomePage"
import PortfolioPage from "./PortfolioPage";
import ContactPage from "./ContactPage";
import DesignPage from "./DesignPage";
import AboutMePage from "./AboutMePage";
const Page = () => {
    const location = useLocation();
    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.path}>
                    <Route path="/Szymon_Pytel" exact component={HomePage}/>
                    <Route path="/portfolio" component={PortfolioPage}/>
                    <Route path="/aboutMe" component={AboutMePage}/>
                    <Route path="/contact" component={ContactPage}/>
                    <Route path="/design" component={DesignPage}/>
                    <Route  component={ContactPage}/>
                </Switch>
            </AnimatePresence>
        </>
    );
};

export default Page;
