import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    // useParams
} from "react-router-dom";
import Login from './login/login';
import SignUp from './signUp/signUp';
import Jobs from './jobs/jobs';
import Home from './Home/Home';
import HireMe from './HireMe/HireMe';
import NewJob from './newJob/newJob';
import JobSection from "./jobPost/jobPost";
import Question from "./question/question";
import LoginDashboard from "./loginDashboard/loginDashboard";
import HeaderDashboard from "../components/headerDashboard/headerDashboard";

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
                    <LoginDashboard />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/hireme">
                    <HireMe />
                </Route>
                <Route path="/new-job">
                    <NewJob />
                </Route>
                <Route path="/job-section">
                    <JobSection />
                </Route>
                <Route path="/faq">
                    <Question />
                </Route>
                <Route path="/header">
                    <HeaderDashboard />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;
