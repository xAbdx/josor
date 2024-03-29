import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from './login/login';
import SignUp from './signUp/signUp';
import Jobs from './jobs/jobs';
import Home from './Home/Home';
import HireMe from './HireMe/HireMe';
import NewJob from './newJob/newJob';
import JobSection from "./jobPost/jobPost";
import Question from "./question/question";
import LoginDashboard from "./AdminPanel/loginDashboard/loginDashboard";
import Dashboard from "./AdminPanel/Dashboard/Dashboard";
import ApproveServiceProvider from "./AdminPanel/ApproveServiceProvider/ApproveServiceProvider";
import CrudCategories from "./AdminPanel/CrudCategories/CrudCategories";
import CrudMessages from "./AdminPanel/CrudMessages/CrudMessages";
import ShowUsers from "./AdminPanel/ShowUsers/ShowUsers";
import Faq from "./AdminPanel/faqs/faqs";
import CrudSkills from "./AdminPanel/CrudSkills/CrudSkills";
import Profile from "./profile/profile";
import ServiceProvider from './ServiceProvider/ServiceProvider';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/sign-up">
                    <SignUp />
                </Route>
                <Route exact path="/jobs/:id">
                    <Jobs />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/hireme">
                    <HireMe />
                </Route>
                <Route path="/new-job">
                    <NewJob />
                </Route>
                <Route path="/job-section/:id">
                    <JobSection />
                </Route>
                <Route path="/faq">
                    <Question />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/logind">
                    <LoginDashboard />
                </Route>
                <Route path="/approve">
                    <ApproveServiceProvider />
                </Route>
                <Route path="/crud-categories">
                    <CrudCategories />
                </Route>
                <Route path="/crud-messages">
                    <CrudMessages />
                </Route>
                <Route path="/show-users">
                    <ShowUsers />
                </Route>
                <Route path="/faqs">
                    <Faq />
                </Route>
                <Route path="/skills">
                    <CrudSkills />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/hire-people">
                    <ServiceProvider />
                </Route>
                
            </Switch>
        </Router>
    );
}

export default Routes;
