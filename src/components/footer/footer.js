import React from "react";
import useStyles from './footer.style'
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>
            <div className={classes.firstColumn}>
                <h1 className={classes.logo}>Josor</h1>
                <hr />
                <p>Made with love ❤ by JOSOR's team &trade; &copy;</p>
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
                    <TextField className={classes.itemWidth} id="filled-basic" label="Email" variant="filled" />
                    {/* <TextareaAutosize className={classes.itemWidthTextarea} id="filled-basic" label="Email" variant="filled" aria-label="minimum height" rowsMin={2} placeholder="Message" /> */}
                    <Button className={classes.btn} variant="contained" color="secondary">Submit</Button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
