import React from "react";
import useStyles from './ApproveServiceProvider.style';
import HeaderDashboard from "../../../components/headerDashboard/headerDashboard";
import NavbarDashboard from "../../../components/navbarDashboard/navbarDashboard";

const ApproveServiceProvider = () => {
    const classes = useStyles();

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