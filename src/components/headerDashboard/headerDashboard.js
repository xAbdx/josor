import React from 'react'
import useStyles from './headerDashboard.style'
import { Redirect } from 'react-router-dom';

export const HeaderDashboard = () => {
    const classes = useStyles();

    if (localStorage.getItem('isAuthorized') === false || localStorage.getItem('isAuthorized') === null)
        return <Redirect to='/' />

    return (
        <div className={classes.root}>
            hi
        </div>
    )
}

export default HeaderDashboard;