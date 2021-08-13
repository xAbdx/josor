import React, { useEffect, useState } from "react";
import useStyles from './ServiceProvider.style';
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
import { TextField, TextareaAutosize } from "@material-ui/core";


const ServiceProvider = () => {
    const classes = useStyles();
    const history = useHistory();

    const [data, setData] = React.useState({
        jobType: "",
        jobWage: 0,
        jobTitle: "",
        jobDescription: ""
    });

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    };

    const [disability, setJobCategory] = useState([])
    const GetJobCategories = async () => {
        const response = await axios.get("http://localhost/api/skills.php?job_id=");
        setJobCategory(response.data);
    }
    useEffect(() => {
        GetJobCategories();
    }, []);

    const [skill, setSkill] = useState([]);

    const GetSkillFromDB = async () => {
        const response = await axios.get("http://localhost/api/skills.php");
        setSkill(response.data);
    }
    useEffect(() => {
        GetSkillFromDB();
    }, []);


    const handleSubmit = async () => {

        if (data['jobDescription'] === undefined || data['jobDescription'].length === 0) {
            alert('Please enter job description');
            return;
        };


        if (data['jobTitle'] === undefined || data['jobTitle'].length === 0) {
            alert('Please enter job title');
            return;
        };

        if (data['jobType'] === undefined) {
            alert('Please select job type');
            return;
        };


        const formData = new FormData();
        formData.append('jobType', data.jobType);
        formData.append('jobDescription', data.jobDescription);
        formData.append('jobWage', data.jobWage.replace(/^0+/, ''));
        formData.append('jobTitle', data.jobTitle);
        formData.append('userID', localStorage.getItem('userID'));

        console.log(formData);
        const response = await axios.post(
            'http://localhost/api/hirePeople.php',
            formData,
            { headers: { 'content-type': 'multipart/form-data' } }
        )
        if (response.data) {
            alert('Submitted successfully!');
        }
         history.push('/');
    };






    if (localStorage.getItem('isAuthorized') === false || localStorage.getItem('isAuthorized') === null)
        return <Redirect to='/' />


    return (
        <div>
            <Header />
            <div className={classes.container}>
                <div className={classes.title}>
                    <p>Please enter job information so job seekers can see it</p>
                </div>
                <div className={classes.card}>
                    <div className={classes.items}>

                        <TextField className={classes.inputField1} required id="outlined-basic" label="Job Title" variant="outlined" value={data.jobTitle} onChange={handleChange} name="jobTitle" onChange={handleChange} type="text" autoComplete="off" />

                        <FormControl variant="outlined" className={classes.inputField1}>
                            <InputLabel id="demo-simple-select-outlined-label">Job Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                onChange={handleChange}
                                label="Job Type"
                                name="jobType"
                                defaultValue=""
                            >

                                {disability.filter(x => x.name.length > 0).map((item, idx) => {
                                    return (
                                        <MenuItem key={idx} value={item.id}>{item.name}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>

                        <TextField className={classes.inputField1} required id="outlined-basic" label="Wage" variant="outlined" value={data.jobWage} onChange={handleChange} name="jobWage" onChange={handleChange} type="number" autoComplete="off" />
                        <TextareaAutosize minRows={5} className={classes.inputField1} required id="outlined-basic" label="Job Description" variant="outlined" value={data.jobDescription} onChange={handleChange} name="jobDescription" onChange={handleChange} type="text" autoComplete="off" />



                    </div>
                    <div className={classes.item}>
                        <Button
                            className={classes.btn}
                            color="primary"
                            orientation="vertical"
                            aria-label="vertical contained primary button group"
                            variant="contained"
                            onClick={handleSubmit}>
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

export default ServiceProvider;