import React from "react";
import { TextField, Button } from "@material-ui/core";
import useStyles from "./newjob.style";
import { useHistory } from "react-router-dom"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import { MdDeleteForever } from "react-icons/md";



const NewJob = () => {
    const [data, setData] = React.useState({
        Titel: "",
        Descriptionofthepost: "",
        Price: "",
        Typeofservice: "",
    })
    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    };
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
                        <TextField 
                            className={classes.inputField1} 
                            id="outlined-basic" 
                            label="Description of the post" 
                            variant="outlined" 
                            value={data.Descriptionofthepost} 
                            name="Descriptionofthepost" 
                            onChange={handleChange} >
                        </TextField>
                        <TextField 
                            className={classes.inputField1} 
                            id="outlined-basic" 
                            label="Price" 
                            variant="outlined"
                             value={data.Price} 
                            name="Price" 
                            onChange={handleChange} >
                        </TextField>
                        <TextField 
                            className={classes.inputField1} 
                            id="outlined-basic" 
                            label="Type of service"
                            variant="outlined"
                            value={data.Typeofservice}
                            name="Type of service" 
                            onChange={handleChange} >
                        </TextField>
                    </div>
                </div>
                <div className={classes.item2}>
                    <Button className={classes.btn} color="primary" orientation="vertical" aria-label="vertical contained primary button group" variant="contained">Submit</Button>
                    <Button className={classes.btnCancel} variant="contained" color="secondary" onClick={() => history.push("/home")} startIcon={<MdDeleteForever />}>Cancel</Button>
                </div>
            </div >
            <Footer />
        </div>
    )
}

export default NewJob