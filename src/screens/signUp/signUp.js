import React from "react";
import { TextField, Button } from "@material-ui/core";
import useStyles from "./sign.style";
import { useHistory } from "react-router-dom";
import Resume from "../../img/resume.svg";
import clsx from 'clsx';
import axios from 'axios';

const SingUp = () => {
    const classes = useStyles();
    const history = useHistory();

    const [data, setData] = React.useState({
        id: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    };

    const insertUser = async () => {
        if (data['username'] === undefined || data['username'].length === 0) {
            alert('Username cannot be empty');
            return;
        };

        const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        //            ^                                       ^   
        if (format.test(data['username'])) {
            alert('Username should contain only charecters ');
            return;
        };

        if (data['email'] === undefined || data['email'].length === 0) {
            alert('Email cannot be empty');
            return;
        };

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(data['email'])) {
            alert('Invalid Email');
            return;
        };

        if (data['phone'] === undefined || data['phone'].length === 0) {
            alert('Username cannot be empty');
            return;
        };

        if (data['password'] === undefined || data['password'].length === 0 || data['password'].length < 8) {
            alert('Password cannot be empty or less than 8 characters');
            return;
        };

        if (data['confirmPassword'] === undefined || data['confirmPassword'].length === 0) {
            alert('Confirm password cannot be empty');
            return;
        };

        if (data['confirmPassword'] !== data['password']) {
            alert('Password should be compatible');
            return;
        };

        const user = {
            id: data.id,
            name: data.username,
            email: data.email,
            phone: data.phone,
            password: data.password,
            confirmPassword: data.confirmPassword,
            userTypeid: 2
        };
        // const response = await axios.post(
        //     'http://localhost/api/Users.php',
        //     user,
        //     { headers: { 'Content-Type': 'application/json' } }
        // )
        // console.log(response);
        // if (response) {
        //     alert("sdaf")
        // }
        // console.log(user);

        const res = await axios.post('http://localhost/api/user.php',
            user,
            { headers: { 'Content-Type': 'application/json' } }
        );
        console.log(res);

        // if (res) {
        //     return history.push("/")
        // }
        console.log(res);
        if (res.data) {
            alert('Welcome Please go to login page');
        }
        window.location.reload(false);
    };

    return (
        <div className={classes.page}>
            <div className={classes.container2}>
                <img src={Resume} width="60%" alt="resume" />
            </div>
            <div className={classes.container1}>
                <div className={classes.container}>
                    <div className={classes.colored}>
                        <div className={classes.test}>
                            <h1 className={classes.titleColor}>Sign Up</h1>
                            <div className={classes.textFields}>
                                <TextField className={classes.inputField1} required id="outlined-basic" label="UserName" variant="outlined" value={data.username} name="username" onChange={handleChange} />

                                <TextField className={classes.inputField1} required id="outlined-basic" label="Email" variant="outlined" value={data.email} onChange={handleChange} name="email" onChange={handleChange} type="email" />

                                <TextField
                                    className={classes.inputField1}
                                    required
                                    // value={phone}
                                    id="outlined-basic"
                                    label="Phone number"
                                    inputProps={{ maxLength: 10 }}
                                    // error={Boolean(errors?.phone)}
                                    // helperText={{ setErrors }}
                                    type="number"
                                    name="phone"
                                    variant="outlined"
                                    onChange={handleChange}
                                />

                                <TextField className={classes.inputField1} required id="outlined-basic" label="Password" variant="outlined" type="password" value={data.password} name="password" onChange={handleChange} />

                                <TextField className={classes.inputField1} required id="outlined-basic" label="confirm password" variant="outlined" type="password" value={data.confirmPassword} name="confirmPassword" onChange={handleChange} />

                                <Button className={classes.inputField1} className={clsx(classes.submet, classes.btnColor)} variant="contained" onClick={insertUser}>SIGN UP</Button>

                                <Button className={classes.inputField1} className={classes.submet} variant="text" color="primary" aria-label="text primary button group" onClick={() => { history.push("/login") }}> Have an account login</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingUp;


