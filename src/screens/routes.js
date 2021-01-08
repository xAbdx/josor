import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from './login/login'
import SignUp from './signUp/signUp'


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
                <Route exact path="/jobs">
                    <p>jobs</p>
                </Route>
                <Route path="/about">
                    <p>about</p>
                </Route>
                <Route path="/dashboard">
                    <p>dashboard</p>
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;