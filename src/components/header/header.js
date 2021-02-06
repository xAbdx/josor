import React from "react";
import useStyles from './header.style'


const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <h1 className={classes.logo}>Josor</h1>
            <ul className={classes.list}>
                <li><a href="" className={classes.link}>Home</a></li>
                <li><a href="" className={classes.link}>Jobs</a></li>
                <li><a href="" className={classes.link}>Account</a></li>
                <li><a href="" className={classes.link}>FQA</a></li>
                <li><a href="" className={classes.link}>Contact</a></li>
                <li><a href="" className={classes.link}>Wanna Hired?</a></li>
                <li><a href="" className={classes.link}>Log out</a></li>
            </ul>
        </div>
    );
}

export default Header;
