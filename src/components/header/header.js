import React from "react";
import useStyles from './header.style'
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Header = () => {
    const classes = useStyles();
    const history = useHistory();

    const clearLogin = async () => {
        localStorage.removeItem('isAuthorized');

    };

    const beServiceProviderAuthButton = () => {
        if (localStorage.getItem('isAuthorized') === false || localStorage.getItem('isAuthorized') === null) {
            return alert("Please Login First");
        }
    }

    const renderAuthButton = () => {
        if (localStorage.getItem('isAuthorized') === false || localStorage.getItem('isAuthorized') === null) {
            return <li><NavLink exact to="/" activeClassName={classes.activeStyle} className={classes.link}>login</NavLink></li>;
        } else {
            return (
                <ul className={classes.list1}>
                    <li><NavLink exact to="/profile" activeClassName={classes.activeStyle} className={classes.link}>Account</NavLink></li>
                    <li><NavLink exact to="/" activeClassName={classes.activeStyle} onClick={clearLogin} className={classes.link}>logout</NavLink></li>
                </ul>
            )
        }
    }

    const redirectLogo = () => {
        history.push(`/home`)

    }

    return (
        <div className={classes.header}>
            <div>
                <h1 className={classes.logo} onClick={redirectLogo}>Josor</h1>
            </div>
            <div>
                <ul className={classes.list}>
                    <li><NavLink exact to="/home" activeClassName={classes.activeStyle} className={classes.link}>Home</NavLink></li>

                    {/* <li><a href="" className={classes.link}>Jobs</a></li> */}
                    {/* <li><a href="" className={classes.link}>Account</a></li> */}

                    <li><NavLink exact to="/faq" activeClassName={classes.activeStyle} className={classes.link}>FAQ</NavLink></li>

                    <li><NavLink exact to="/hireme" activeClassName={classes.activeStyle} onClick={beServiceProviderAuthButton} className={classes.link}>Be Service Provider</NavLink></li>

                    {renderAuthButton()}

                </ul>
            </div>
        </div>
    );
}

export default Header;
