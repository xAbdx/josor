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
                <p>It is a long established fact that a</p>
            </div>
            <div className={classes.secondColumn}>
                <h1>Contact Us</h1>
                <div>
                    <p>out address...</p>
                    <p>phone: 000-000-0000</p>
                    <p>Email: josor@gmail.com</p>
                </div>
            </div>
            <div className={classes.firstColumn}>
                <h1>Get in touch</h1>
                <div className={classes.form}>
                    <TextField id="filled-basic" label="Email" variant="filled" />
                    <TextField id="filled-basic" label="Message" variant="filled" />
                    {/* <TextareaAutosize
                        rowsMax={4}
                        aria-label="maximum height"
                        placeholder="Maximum 4 rows"
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua."
                    /> */}
                    <Button variant="contained" color="secondary">Default</Button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
