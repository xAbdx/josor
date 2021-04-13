import React from 'react'
import useStyles from './loginDashboard.style'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const LoginDashboard = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.card}>
                <div className={classes.loginCard}>
                    <h1 className={classes.title}>JOSOR</h1>
                    <div className={classes.loginCardSection}>
                        <div className={classes.marginTest}>
                            <TextField
                                className={classes.inputField}
                                required
                                id="outlined-basic"
                                label="User name"
                                variant="outlined"
                            />
                        </div>
                        <div className={classes.marginTest}>
                            <TextField
                                className={classes.inputField}
                                required
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                type="password"
                            />
                        </div>
                        <div className={classes.marginTest}>
                            <Button variant="contained">LOG IN</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginDashboard;