import React from "react";
import { TextField, Button } from "@material-ui/core";
import useStyles from "./sign.style";
import { useHistory } from "react-router-dom";
import Resume from "../../img/resume.svg";
import clsx from 'clsx';
import axios from 'axios';

const SingUp = () => {
    const [data, setData] = React.useState({
        id: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",


    })
    const handleChange = (event) => {
       
        setData({ ...data, [event.target.name]: event.target.value })
    };
    const insertUser = async () => {
       
        const user = {
            id: data.id,
            name: data.username,
            email: data.email,
            password: data.password,
            phone: 13444,
            userTypeid: 1
        };
        const response = await axios.post(
            'http://localhost/api/Users.php',
            user,
            { headers: { 'Content-Type': 'application/json' } }
        )
       
    };
    const classes = useStyles();
    const history = useHistory();
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
                                    inputProps={{ maxLength: 5 }}
                                    // error={Boolean(errors?.phone)}
                                    // helperText={{ setErrors }}
                                    type="number"
                                    variant="outlined"
                                    onChange={handleChange}
                                />

                                <TextField className={classes.inputField1} required id="outlined-basic" label="Password" variant="outlined" type="password" value={data.password} name="password" onChange={handleChange} />

                                <TextField className={classes.inputField1} required id="outlined-basic" label="confirm password" variant="outlined" type="password" value={data.confirmPassword} name="confirmPassword" onChange={handleChange} />

                                <Button className={classes.inputField1} className={clsx(classes.submet, classes.btnColor)} variant="contained" onClick={insertUser}>SIGN UP</Button>

                                <Button className={classes.inputField1} className={classes.submet} variant="text" color="primary" aria-label="text primary button group" onClick={() => { history.push("") }}> Have an account login</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingUp;


