import React, { useState } from "react";
import useStyles from './footer.style'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import '../../App.css';

const Footer = () => {
    const classes = useStyles();

    const [data, setData] = React.useState({
        id: "",
        email: "",
    })

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    };

    const emailRegex = /\S+@\S+\.\S+/;
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');

    const validateEmail = (event) => {

        setData({ ...data, [event.target.name]: event.target.value })
        const email = event.target.value;
        if (emailRegex.test(email)) {
            setIsValid(true);
            setMessage('Your email looks good!');
        } else {
            setIsValid(false);
            setMessage('Please enter a valid email!');
        }
    };

    const insertEmail = async () => {

        const user = {
            id: data.id,
            email: data.email,
        };
        const response = await axios.post(
            'http://localhost/api/contact-us.php',
            user,
            { headers: { 'Content-Type': 'application/json' } }
        )

    };

    return (
        <div className={classes.footerContainer}>
            <div className={classes.firstColumn}>
                <h1 className={classes.logo}>Josor</h1>
                <hr />
                <p>Made with love <span className={classes.heart}>❤</span> by JOSOR's team &trade; &copy;</p>
            </div>
            <div className={classes.secondColumn}>
                <h1>Contact Us</h1>
                <p>Old city - Hebron - Palestine</p>
                <p>phone: 000-000-0000</p>
                <p>Email: josor@gmail.com</p>
            </div>
            <div className={classes.firstColumn}>
                <div className={classes.form}>
                    <h1>Get in touch</h1>
                    <TextField className={classes.itemWidth} id="filled-basic" name="email" label="Email" variant="filled" onChange={validateEmail} type="email" />
                    <div className={`message ${isValid ? 'success' : 'error'}`}>
                        {message}
                    </div>
                    <Button className={classes.btn} variant="contained" color="secondary" onClick={insertEmail}>Submit</Button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
