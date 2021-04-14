import React from 'react'
import useStyles from './Dashboard.style'
import HeaderDashboard from "../../../components/headerDashboard/headerDashboard";
import NavbarDashboard from "../../../components/navbarDashboard/navbarDashboard";
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
    const classes = useStyles();

    // if (localStorage.getItem('isAuthorized') === false || localStorage.getItem('isAuthorized') === null)
    //     return <Redirect to='/logind' />

    return (
        <div className={classes.root}>
            <HeaderDashboard />
            <div>
                <NavbarDashboard />
            </div>
        </div>
    )
}

export default Dashboard;