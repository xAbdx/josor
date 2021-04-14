import React from 'react'
import useStyles from './CrudMessages.style'
import HeaderDashboard from "../../../components/headerDashboard/headerDashboard";
import NavbarDashboard from "../../../components/navbarDashboard/navbarDashboard";

const CrudMessages = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <HeaderDashboard />
            <div className={classes.content}>
                <NavbarDashboard />
                <div>
                    crud2
                </div>
            </div>
        </div>
    )
}

export default CrudMessages;