import React from "react";
import useStyles from './login.style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import clsx from 'clsx';
import { useHistory } from "react-router-dom";
import Resume from "../../img/resume.svg"
import axios from 'axios';

const Login = () => {
    const [data, setData] = React.useState({})
    const handleChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setData({ ...data, [event.target.name]: event.target.value })
    };
    const Login = async () => {
        console.log(data);
        console.log(data['UserName']);
        if (data['UserName'].length === 0) {
            alert('Username cannot be empty');
            return;
        }
        if (data['Password'].length === 0) {
            alert('Password cannot be empty');
            return;
        }
        const response = await axios.post(
            'http://localhost/api/login.php',
            data,
            { headers: { 'Content-Type': 'application/json' } }
        )
        console.log(response.data['isValid'])
        console.log(response.data['errorMessage'])
        if (response.data['isValid'] === true) {
            history.push("/home")
        }
        else {
            alert(response.data['errorMessage']);
        }
    };
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
                        <div className={classes.textFields}>
                            <TextField className={classes.inputField} id="outlined-basic name" name="UserName" label="User Name" variant="outlined" onChange={handleChange} />

                            <TextField className={classes.inputField} id="outlined-basic pass" name="Password" label="Password" variant="outlined" type="password" onChange={handleChange} />

                            <Button className={classes.btnColor} variant="contained" onClick={Login}>Login</Button>

                            {/* className={clsx(classes.inputField classes.btnColor)} for 2 classes */}

                            <Button className={classes.inputField} variant="text" color="primary" aria-label="text primary button group" onClick={() => { history.push("/sign-up") }}>Don't Have an account?</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
