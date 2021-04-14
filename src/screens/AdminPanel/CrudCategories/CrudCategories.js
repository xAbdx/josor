import React from 'react'
import useStyles from './CrudCategories.style'
import HeaderDashboard from "../../../components/headerDashboard/headerDashboard";
import NavbarDashboard from "../../../components/navbarDashboard/navbarDashboard";

const CrudCategories = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <HeaderDashboard />
            <div className={classes.content}>
                <NavbarDashboard />
                <div>
                    crud
                </div>
            </div>
        </div>
    )
}

export default CrudCategories;