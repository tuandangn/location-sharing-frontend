import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import RegionRouter from './RegionRouter';
import HomePage from '../containers/HomeContainer';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const RootRouter = () => {
    return <Router>
        <Navbar />
        <Switch>
            <Route path="/regions" component={RegionRouter}></Route>
            <Route path="/" exact component={HomePage}></Route>
        </Switch>
        <Footer />
    </Router>
};

export default RootRouter;