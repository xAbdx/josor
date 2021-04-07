import React, { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import useStyles from "./newjob.style";
import { useHistory } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { MdDeleteForever } from "react-icons/md";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const NewJob = () => {
    const [data, setData] = React.useState({
        Titel: "",
        Descriptionofthepost: "",
        Price: "",
        // Typeofservice: "",
    })

    const [option, setOption] = useState([]);

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
        // setOption({ ...data, [event.target.name]: event.target.value });
    };

    const GetCategoryFromDB = async () => {
        const response = await axios.get("http://localhost/api/skills.php");
        setOption(response.data);
        console.log(response);
    }

    useEffect(() => {
        GetCategoryFromDB();
    }, []);


    // const handleChangeSelect = (event) => {
    //     setOption(event.target.value);
    // };

    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.container}>
            <Header />
            <div className={classes.title}>
                <p>New Job</p>
            </div>
            <div className={classes.card}>
                <div className={classes.items}>
                    <div className={classes.item1}>
                        <TextField
                            className={classes.inputField1}
                            id="outlined-basic"
                            label="Titel"
                            variant="outlined"
                            value={data.Titel}
                            name="Title"
                            onChange={handleChange} >
                        </TextField>
                        {/* <TextField
                            className={classes.inputField1}
                            id="outlined-basic"
                            label="Description of the post"
                            variant="outlined"
                            value={data.Descriptionofthepost}
                            name="Descriptionofthepost"
                            onChange={handleChange} >
                        </TextField> */}

                        <TextareaAutosize
                            className={classes.inputFieldTextarea}
                            id="outlined-basic"
                            variant="outlined"
                            rowsMax={10}
                            rowsMin={10}
                            aria-label="maximum height"
                            placeholder="Description of the post"
                            onChange={handleChange}
                        />

                        <TextField
                            className={classes.inputField1}
                            id="outlined-basic"
                            label="Price"
                            type="number"
                            variant="outlined"
                            value={data.Price}
                            name="Price"
                            onChange={handleChange} >
                        </TextField>

                        {/* <TextField
                            className={classes.inputField1}
                            id="outlined-basic"
                            label="Type of service"
                            variant="outlined"
                            value={data.Typeofservice}
                            name="Type of service"
                            onChange={handleChange} >
                        </TextField> */}

                        <FormControl variant="outlined" className={classes.inputField1}>
                            <InputLabel id="demo-simple-select-outlined-label">Type of Service</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                // value={option}
                                onChange={handleChange}
                                label="Skill"
                                defaultValue=""
                            >
                                {/* <MenuItem value="">
                                    <em>None</em>
                                </MenuItem> */}
                                {option.map((item) => {
                                    return (
                                        <MenuItem value={item.id}>{item.name}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </div>
                    <div className={classes.item2}>
                        <Button className={classes.btn} color="primary" orientation="vertical" aria-label="vertical contained primary button group" variant="contained">Submit</Button>
                        <Button className={classes.btnCancel} variant="contained" color="secondary" onClick={() => history.push("/home")} startIcon={<MdDeleteForever />}>Cancel</Button>
                    </div>
                </div>

            </div >
            <Footer />
        </div>
    )
}

export default NewJob