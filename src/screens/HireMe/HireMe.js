import React from "react";
import useStyles from './HireMe.style';
import Header from '../../components/header/header';
import Footer from "../../components/footer/footer";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MdAttachFile } from "react-icons/md";
import axios from 'axios';

const HireMe = () => {
    const [data, setData] = React.useState({
        id: "",
        serviceProviderUserId: "",
        phone: "",
        location: "",
        kindOfDisability: "",
    })
    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    };
    const ServiceProviderInfo = async () => {
        console.log('test');
        console.log(data);
        const user = {
            id: data.id,
            serviceProviderUserId: data.serviceProviderUserId,
            phone: data.phone,
            location: data.location,
            kindOfDisability: data.kindOfDisability
        };
        const response = await axios.post(
            'http://localhost/api/user.php',
            user,
            { headers: { 'Content-Type': 'application/json' } }
        )
        console.log(response.data)
    };
    // const [phone, setPhone] = React.useState;
    // const [errors, setErrors] = React.useState;

    // const handleChange1 = (event) => {
    //     const { target: { value } } = event;
    //     setErrors({ phone: '' });
    //     setPhone(value);
    //     let reg = new RegExp(/^\d*S/).test(value)
    //     if (!reg) {
    //         setErrors({ phone: 'Only Numbers' })
    //     }
    // };

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
                        <TextField className={classes.inputField1} required id="outlined-basic" label="Your Skills" variant="outlined" onChange={handleChange} />

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

                        <TextField className={classes.inputField1} required id="outlined-basic" label="Location" variant="outlined" onChange={handleChange} />

                        <TextField className={classes.inputField1} required id="outlined-basic" label="kind of disability" variant="outlined" onChange={handleChange} />

                        <div className={classes.inputImage}>
                            <label htmlFor="contained-button-file">
                                <Button className={classes.inputField2} variant="contained" color="primary" component="span" endIcon={<MdAttachFile />}>
                                    Your ID
                                </Button>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                            </label>
                            <label htmlFor="contained-button-file">
                                <Button className={classes.inputField2} variant="contained" color="primary" component="span" endIcon={<MdAttachFile />}>
                                    Your supporting documents
                                </Button>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                />
                            </label>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <Button
                            className={classes.btn}
                            color="primary"
                            orientation="vertical"
                            aria-label="vertical contained primary button group"
                            variant="contained"
                            onClick={ServiceProviderInfo}>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HireMe;

