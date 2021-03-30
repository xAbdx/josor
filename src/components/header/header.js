import React from "react";
import useStyles from './header.style'
// import { useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <div>
                <h1 className={classes.logo}>Josor</h1>
            </div>
            <div>
                <ul className={classes.list}>
                    <li><NavLink exact to="/home" activeClassName={classes.activeStyle} className={classes.link}>Home</NavLink></li>

                    <li><a href="" className={classes.link}>Jobs</a></li>
                    <li><a href="" className={classes.link}>Account</a></li>
                    <li><NavLink exact to="/faq" activeClassName={classes.activeStyle} className={classes.link}>FAQ</NavLink></li>
                    {/* <li><a href="" className={classes.link}>Contact</a></li> */}

                    {/* <li><NavLink exact to="/new-job" activeClassName={classes.activeStyle} className={classes.link}>
                        new job
                    </NavLink></li> */}

                    <li><NavLink exact to="/hireme" activeClassName={classes.activeStyle} className={classes.link}>Be Service Provider</NavLink></li>

                    <li><NavLink exact to="/" activeClassName={classes.activeStyle} className={classes.link}>Login</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
