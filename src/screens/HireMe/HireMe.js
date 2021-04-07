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
import MenuItem from '@material-ui/core/MenuItem';


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
        console.log('test');
        console.log(data);
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
        console.log(response.data)
    };

    const [skill, setSkill] = useState([])
    const GetSkillsFromDB = async () => {
        const response = await axios.get("http://localhost/api/skills.php");
        setSkill(response.data);
        console.log(response);
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

    return (
        <div>
            <Header />
            <div className={classes.container}>
                <div className={classes.title}>
                    <p>hire me</p>
                </div>
                <div className={classes.card}>
                    <div className={classes.items}>
                        {/* <TextField className={classes.inputField1} required id="outlined-basic" label="Your Skills" variant="outlined" onChange={handleChange} /> */}

                        {/* <FormControl variant="outlined" className={classes.inputField1}>
                            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={skill}
                                onChange={handleChange}
                                label="Skill"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl> */}

                        <Select
                            className={classes.selectField}
                            isMulti
                            name="colors"
                            options={options}
                            classNamePrefix="select"
                        >
                            {/* <MenuItem value={20}>Twenty</MenuItem> */}
                        </Select>

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

