import React from 'react'
import useStyles from './headerDashboard.style'
import { NavLink } from 'react-router-dom';

const HeaderDashboard = () => {
    const classes = useStyles();
    const clearLogin = async () => {
        localStorage.removeItem('isAuthorized');

    };

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <h1 className={classes.title}>Admin Dashboard</h1>
                <NavLink className={classes.link} exact to="/logind" onClick={clearLogin} className={classes.link}>Log out</NavLink>
            </div>
        </div>
    )
}

export default HeaderDashboard;