import React, { useEffect, useState } from "react";
import useStyles from './HireMe.style';
import Header from '../../components/header/header';
import Footer from "../../components/footer/footer";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MdAttachFile } from "react-icons/md";
import axios from 'axios';
import { MdDeleteForever } from "react-icons/md";
import { useHistory } from "react-router-dom";
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import Select from 'react-select';
import { Redirect } from 'react-router-dom';


const HireMe = () => {
    const [data, setData] = React.useState({
        id: "",
        serviceProviderUserId: "",
        location: "",
        kindOfDisability: "",
        skill: ""
    })
    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    };
    const ServiceProviderInfo = async () => {
       
        const user = {
            id: data.id,
            serviceProviderUserId: data.serviceProviderUserId,
            location: data.location,
            kindOfDisability: data.kindOfDisability,
            skill: data.skill,
        };
        const response = await axios.post(
            'http://localhost/api/user.php',
            user,
            { headers: { 'Content-Type': 'application/json' } }
        )
      
    };

    const [skill, setSkill] = useState([])
    const GetSkillsFromDB = async () => {
        const response = await axios.get("http://localhost/api/skills.php");
        setSkill(response.data);
       
    }
    useEffect(() => {
        GetSkillsFromDB();
    }, []);
    const options = [
        { value: data.skill, label: data.name },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const classes = useStyles();
    const history = useHistory();

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
                        <TextField className={classes.inputField1} required id="outlined-basic" label="Location" variant="outlined" onChange={handleChange} />

                        <TextField className={classes.inputField1} required id="outlined-basic" label="kind of disability" variant="outlined" onChange={handleChange} />

                        <Select
                            className={classes.selectField}
                            isMulti
                            name="colors"
                            options={options}
                            classNamePrefix="select"
                        >
                            {/* <MenuItem value={20}>Twenty</MenuItem> */}
                        </Select>

                        <div className={classes.inputImage}>
                            <div className={classes.firstImage}>
                                <label htmlFor="contained-button-file">
                                    Your ID
                                {/* <Button className={classes.inputField2} variant="contained" color="primary" component="span" endIcon={<MdAttachFile />}>
                                    Your ID
                                </Button> */}
                                    {/* <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={(e) => {
                                        setImage(e.target.files[0]);
                                        uploader(e);
                                    }}
                                /> */}
                                </label>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={(e) => {
                                        setImage(e.target.files[0]);
                                        uploader(e);
                                    }}
                                />
                                {result && <img className={classes.imageDifv} ref={imageRef} src={result} alt="" />}
                            </div>
                            <div className={classes.secondImage}>
                                <label htmlFor="contained-button-file">
                                    Your supporting documents
                                {/* <Button className={classes.inputField2} variant="contained" color="primary" component="span" endIcon={<MdAttachFile />} >
                                    Your supporting documents
                                </Button> */}
                                    {/* <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={(e) => {
                                        setImage(e.target.files[0]);
                                        uploader(e);
                                    }}
                                /> */}
                                </label>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    onChange={(e) => {
                                        setImage(e.target.files[0]);
                                        uploader(e);
                                    }}
                                />
                                {result && <img className={classes.imageDifv} ref={imageRef} src={result} alt="" />}
                            </div>

                            {/* <div className={classes.imageDifv}>
                                <input
                                    accept="image/*"
                                    // multiple
                                    type="file"
                                    onChange={(e) => {
                                        setImage(e.target.files[0]);
                                        uploader(e);
                                    }}
                                />
                                {result && <img className={classes.imageDifv} ref={imageRef} src={result} alt="" />}
                            </div> */}
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
                            onClick={() => history.push("/home")}
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

