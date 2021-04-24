import React from 'react'
import useStyles from './navbarDashboard.style'
import { NavLink } from 'react-router-dom';

const NavbarDashboard = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.navbar}>
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <NavLink
                            exact
                            to="/approve"
                            activeClassName={classes.activeStyle}
                            className={classes.link}
                        >
                            Approve Service Provider
                        </NavLink>
                    </li>

                    <li className={classes.item}>
                        <NavLink
                            exact
                            to="/crud-messages"
                            activeClassName={classes.activeStyle}
                            className={classes.link}
                        >
                            Contact us
                        </NavLink>
                    </li>

                    <li className={classes.item}>
                        <NavLink
                            exact
                            to="/crud-categories"
                            activeClassName={classes.activeStyle}
                            className={classes.link}
                        >
                            Categories
                        </NavLink>
                    </li>

                    <li className={classes.item}>
                        <NavLink
                            exact
                            to="/show-users"
                            activeClassName={classes.activeStyle}
                            className={classes.link}
                        >
                            Show users
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarDashboard;