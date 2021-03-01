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
<<<<<<< HEAD
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import HireMe from '../screens/HireMe/HireMe'
import FAQ from "../question/question";
=======
import HireMe from './HireMe/HireMe'
import NewJob from './newJob/newJob'
import JobSection from "./jobPost/jobPost";
>>>>>>> 09245e623391c4a093242128808ff155efba2178

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
<<<<<<< HEAD
                <Route path="/HireMe">
                    <HireMe />
=======
                <Route path="/hire-me">
                    <HireMe />
                </Route>
                <Route path="/new-job">
                    <NewJob />
                </Route>
                <Route path="/job-section">
                    <JobSection />
>>>>>>> 09245e623391c4a093242128808ff155efba2178
                </Route>
                <Route path="/faq">
                    <FAQ />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;