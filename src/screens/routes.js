import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    // useParams
} from "react-router-dom";
import Login from './login/login'
import SignUp from './signUp/signUp'
import Jobs from './jobs/jobs'
import Home from './Home/Home'
import HireMe from './HireMe/HireMe'


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/sign-up">
                    <SignUp />
                </Route>
                <Route exact path="/jobs/:id">
                    <Jobs />
                </Route>
                <Route path="/about">
                    <p>about</p>
                </Route>
                <Route path="/dashboard">
                    <p>dashboard</p>
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/hire-me">
                    <HireMe />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;