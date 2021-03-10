import React from "react";
import useStyles from './header.style'
import { useHistory } from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState(0);

    return (
        <div className={classes.header}>
            <h1 className={classes.logo}>Josor</h1>
            <ul className={classes.list}>
                {/* <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction className={classes.link} onClick={() => { history.push("/home") }} label="Home" />
                    <BottomNavigationAction className={classes.link} onClick={() => { history.push("jobs/id") }} label="Jobs" />
                    <BottomNavigationAction className={classes.link} onClick={() => { history.push() }} label="Account" />
                    <BottomNavigationAction className={classes.link} onClick={() => { history.push() }} label="FQA" />
                    <BottomNavigationAction className={classes.link} onClick={() => { history.push() }} label="Reviews" />
                    <BottomNavigationAction className={classes.link} onClick={() => { history.push("/hire-me") }} label="Be Service Provider" />
                    <BottomNavigationAction className={classes.link} onClick={() => { history.push("/sign-up") }} label="Sign up" />
                </BottomNavigation> */}
                <li><a href="" className={classes.link} onClick={() => { history.push("/home") }}>Home</a></li>
                <li><a href="" className={classes.link}>Jobs</a></li>
                <li><a href="" className={classes.link}>Account</a></li>
                <li><a href="" className={classes.link} onClick={() => { history.push("/faq") }}>FQA</a></li>
                <li><a href="" className={classes.link}>Contact</a></li>
                <li><a href="" className={classes.link} onClick={() => { history.push("/new-job") }}>New Job</a></li>
                <li><a href="" className={classes.link} onClick={() => { history.push("/hire-me") }}>Be Service Provider</a></li>
                <li><a href="" className={classes.Lastlink} onClick={() => { history.push("../../sign-up") }}>Sign up</a></li>

            </ul>
        </div>
    );
}

export default Header;
