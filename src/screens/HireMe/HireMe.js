import React, { useEffect, useState } from "react";
import useStyles from './HireMe.style';
import Header from '../../components/header/header';
import Footer from "../../components/footer/footer";
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { MdAttachFile } from "react-icons/md";
import axios from 'axios';
import { MdDeleteForever } from "react-icons/md";
import { useHistory } from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Redirect } from 'react-router-dom';
import { TextField } from "@material-ui/core";


const HireMe = () => {
    const classes = useStyles();
    const history = useHistory();

    const [data, setData] = React.useState({
        id: "",
        serviceProviderUserId: "",
        email: "",
        kindOfDisability: "",
        skill: "",
        imageFile: ""
    })

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    };

    const handleChangeFile = (event) => {
        setData({ ...data, [event.target.name]: event.target.files[0] })
    };


    const [disability, setDisability] = useState([])
    const GetDisabilityFromDB = async () => {
        const response = await axios.get("http://localhost/api/disabilities.php");
        setDisability(response.data);
    }
    useEffect(() => {
        GetDisabilityFromDB();
    }, []);

    const [skill, setSkill] = useState([]);

    const GetSkillFromDB = async () => {
        const response = await axios.get("http://localhost/api/skills.php");
        setSkill(response.data);
    }
    useEffect(() => {
        GetSkillFromDB();
    }, []);


    const ServiceProviderInfo = async () => {
        
        if (data['email'] === undefined || data['email'].length === 0) {
            alert('Please add your email');
            return;
        };

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(data['email'])) {
            alert('Invalid Email');
            return;
        };

        if (data['kindOfDisability'] === undefined || data['kindOfDisability'].length === 0) {
            alert('Please select Kind Of Disability');
            return;
        };

        if (data['skill'] === undefined || data['skill'].length === 0) {
            alert('Please select skill');
            return;
        };

        if (data['imageFile'] === undefined || data['imageFile'].length === 0) {
            alert('Please add image');
            return;
        };

        const formData = new FormData();
        formData.append('id', data.id)
        formData.append('serviceProviderUserId', data.serviceProviderUserId)
        formData.append('email', data.email)
        formData.append('kindOfDisability', data.kindOfDisability)
        formData.append('skill', data.skill)
        formData.append('imageFile', data.imageFile)
        formData.append('userID',localStorage.getItem('userID'));

        const response = await axios.post(
            'http://localhost/api/HireMe.php',
            formData,
            { headers: { 'content-type': 'multipart/form-data' } }
        )
        if (response.data) {
            alert('Submitted successfully!');
        }
        window.location.reload(false);
    };

    const [image, setImage] = React.useState("");
    const imageRef = React.useRef(null);

    function useDisplayImage() {
        const [result, setResult] = React.useState("");

        function uploader(e) {
            const imageFile = e.target.files[0];

            const reader = new FileReader();
            reader.addEventListener("load", (e) => {
                setResult(e.target.result);
            });

            reader.readAsDataURL(imageFile);
        }

        return { result, uploader };
    }

    const { result, uploader } = useDisplayImage();

    if (localStorage.getItem('isAuthorized') === false || localStorage.getItem('isAuthorized') === null)
        return <Redirect to='/' />
    // alert("Please login first");

    return (
        <div>
            <Header />
            <div className={classes.container}>
                <div className={classes.title}>
                    <p>hire me</p>
                </div>
                <div className={classes.card}>
                    <div className={classes.items}>
                        <TextField className={classes.inputField1} required id="outlined-basic" label="Email" variant="outlined" value={data.email} onChange={handleChange} name="email" onChange={handleChange} type="email" />

                        <FormControl variant="outlined" className={classes.inputField1}>
                            <InputLabel id="demo-simple-select-outlined-label">kind of disability</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                // value={option}
                                onChange={handleChange}
                                label="kind of disability"
                                name="kindOfDisability"
                                defaultValue=""
                            >
                                {/* <MenuItem value="">
                                    <em>None</em>
                                </MenuItem> */}
                                {disability.map((item,idx) => {
                                    return (
                                        <MenuItem key={idx} value={item.disabilityID}>{item.Name}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>

                        <FormControl variant="outlined" className={classes.inputField1}>
                            <InputLabel id="demo-simple-select-outlined-label">Your Skill</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                // value={option}
                                onChange={handleChange}
                                label="Your Skill"
                                name="skill"
                                defaultValue=""
                            >
                                {/* <MenuItem value="">
                                    <em>None</em>
                                </MenuItem> */}
                                {skill.map((item,idx) => {
                                    return (
                                        <MenuItem key={idx} value={item.id}>{item.name}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>



                        <div className={classes.inputImage}>
                            <div className={classes.firstImage}>
                                <label htmlFor="contained-button-file">
                                    upload your ID and your supporting documents
                                </label>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    name="imageFile"
                                    onChange={handleChangeFile}
                                />
                                <br />
                                {result && <img className={classes.imageDifv} ref={imageRef} src={result} alt="" />}
                            </div>

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
                        <Button
                            className={classes.btnCancel}
                            variant="contained"
                            color="secondary"
                            onClick={() => history.push("/")}
                            startIcon={<MdDeleteForever />}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HireMe;