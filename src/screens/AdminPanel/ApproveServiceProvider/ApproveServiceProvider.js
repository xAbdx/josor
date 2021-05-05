import React from "react";
import useStyles from './ApproveServiceProvider.style';
import HeaderDashboard from "../../../components/headerDashboard/headerDashboard";
import NavbarDashboard from "../../../components/navbarDashboard/navbarDashboard";
import { Redirect } from 'react-router-dom';

const ApproveServiceProvider = () => {
    const classes = useStyles();

    if (localStorage.getItem('isAuthorized') === false || localStorage.getItem('isAuthorized') === null)
        return <Redirect to='/logind' />

    return (
        <div className={classes.root}>
            <HeaderDashboard />
            <div className={classes.content}>
                <NavbarDashboard />
                <div className={classes.table}>
                    <h1>Users who submit hire me form</h1>
                </div>
            </div>
        </div>
    )
}

export default ApproveServiceProvider;