import React from "react";
import useStyles from './header.style'
import { useHistory } from "react-router-dom";


const Header = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.header}>
            <h1 className={classes.logo}>Josor</h1>
            <ul className={classes.list}>
                <li><a href="" className={classes.link} onClick={() => { history.push("/home") }}>Home</a></li>
                <li><a href="" className={classes.link}>Jobs</a></li>
                <li><a href="" className={classes.link}>Account</a></li>
                <li><a href="" className={classes.link}>FQA</a></li>
                <li><a href="" className={classes.link}>Contact</a></li>
                <li><a href="" className={classes.link} onClick={() => { history.push("/hire-me") }}>Be Service Provider</a></li>
                <li><a href="" className={classes.Lastlink} onClick={() => { history.push("../../sign-up") }}>Sign up</a></li>
            </ul>
        </div>
    );
}

export default Header;
