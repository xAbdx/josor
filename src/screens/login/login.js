import React from "react";
import useStyles from './login.style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";
import Resume from "../../img/resume.svg"

const Login = () => {
    const history = useHistory();
    const classes = useStyles();
    return (
        <div className={classes.page}>
            <div className={classes.container2}>
                <img src={Resume} width="60%" alt="resume" />
            </div>
            <div className={classes.container1}>
                <div className={classes.container}>
                    <div className={classes.colored}>
                        <h1 className={classes.titleColor}>Login</h1>
                        <TextField className={classes.spaceForm} id="outlined-basic name" label="UserName" variant="outlined" />
                        <TextField className={classes.spaceForm} id="outlined-basic pass" label="Password" variant="outlined" type="password" />
                        <Button className={clsx(classes.spaceForm, classes.btnColor)} color="primary" variant="contained">Login</Button>

                        <Button className={classes.spaceForm} variant="text" color="primary" aria-label="text primary button group" onClick={() => { history.push("/sign-up") }}>Don't Have an account?</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
