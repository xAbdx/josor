import React from 'react'
import useStyles from './loginDashboard.style'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";


export const LoginDashboard = () => {
    const classes = useStyles();
    const history = useHistory();

    const [data, setData] = React.useState({})
    const handleChange = (event) => {
       
        setData({ ...data, [event.target.name]: event.target.value })
    };

    const Login = async () => {
      
        if (data['UserName'] === undefined || data['UserName'].length === 0) {
            alert('Username cannot be empty');
            return;
        }
        if (data['Password'] === undefined || data['Password'].length === 0) {
            alert('Password cannot be empty');
            return;
        }
        const response = await axios.post(
            'http://localhost/api/dashboard-login.php',
            data,
            { headers: { 'Content-Type': 'application/json' } }
        )
       
        if (response.data['isAdmin'] === true) {
            history.push("/dashboard")
            localStorage.setItem('isAuthorized', true);
        }
        else {
            alert(response.data['errorMessage']);
            localStorage.setItem('isAuthorized', false);
        }
    };

    return (
        <div className={classes.root}>
            <div className={classes.card}>
                <h1 className={classes.title}>Login <RiAdminLine /></h1>
                <div className={classes.loginCardSection}>
                    <div className={classes.marginField}>
                        <TextField
                            required
                            id="outlined-basic"
                            label="User name"
                            variant="outlined"
                            name="UserName"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={classes.marginField}>
                        <TextField
                            required
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            type="password"
                            name="Password"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={classes.marginField}>
                        <Button variant="contained" onClick={Login}>LOG IN</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginDashboard;