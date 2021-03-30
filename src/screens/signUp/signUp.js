import React from "react";
import { TextField, Button } from "@material-ui/core";
import useStyles from "./sign.style"
import { useHistory } from "react-router-dom";
import Resume from "../../img/resume.svg"
import axios from 'axios';
const SingUp = () => {
    const [data, setData] = React.useState({
        id:0,
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone:1234556,
        userType:123456
    })
    const handleChange = (event) => {
        console.log(event);
        setData({ ...data, [event.target.name]: event.target.value })
    };
    const test = async ()=>{
        console.log('test');
        console.log(data);
        const user = {
            id: data.id,
            name:data.username,
            email:data.email,
            password:data.password,
            phone:data.phone,
            'userType':1
          };
        const response =  await axios.post(
            'http://localhost/test/users.php',
            user,
            { headers: { 'Content-Type': 'application/json' } }
          )
          console.log(response.data)
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
                            <TextField id="outlined-basic" label="UserName" variant="outlined" value={data.username} name="username" onChange={handleChange} />
                            <TextField id="outlined-basic" label="Email" variant="outlined" value={data.email} onChange={handleChange} name="email" onChange={handleChange} />
                            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" value={data.password} name="password" onChange={handleChange} />
                            <TextField id="outlined-basic" label="confirm password" variant="outlined" type="password" value={data.confirmPassword} name="confirmPassword" onChange={handleChange} />
                            <Button className={classes.submet, classes.Color} variant="contained" onClick={test}>SIGN UP</Button>
                            <Button className={classes.submet} variant="text" color="primary" aria-label="text primary button group" onClick={() => { history.push("") }}> Have an account login</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingUp;

