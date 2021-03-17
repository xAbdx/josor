import React from "react";
import useStyles from './HireMe.style'
import Header from '../../components/header/header'
import Footer from "../../components/footer/footer";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { MdAttachFile } from "react-icons/md"; 
// use it for the id and type of disability

const HireMe = () => {
    const classes = useStyles();

    return (
        <div>
            <Header />
            <div className={classes.container}>
                <div className={classes.title}>
                    <p>hire me</p>
                </div>
                <div className={classes.card}>
                    <div className={classes.items}>
                        <TextField className={classes.inputField1} id="outlined-basic" label="Full Name AF" variant="outlined" disabled />
                        <TextField className={classes.inputField1} id="outlined-basic" label="Phone AF" variant="outlined" disabled />
                        <TextField className={classes.inputField1} required id="outlined-basic" label="Location" variant="outlined" />

                        {/* <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                                kind of disability
                            </Button>
                        </label>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        /> */}

                        <TextField className={classes.inputField1} required id="outlined-basic" label="kind of disability" variant="outlined" />
                        <TextField className={classes.inputField1} required id="outlined-basic" label="Your ID" variant="outlined" />
                        <TextField className={classes.inputField1} required id="outlined-basic" label="Your supporting documents" variant="outlined" />
                    </div>
                    <div className={classes.item}>
                        <Button
                            className={classes.btn}
                            orientation="vertical"
                            aria-label="vertical contained primary button group"
                            variant="contained">Submit</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HireMe;

