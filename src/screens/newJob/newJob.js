import React from "react";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";


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

    const history = useHistory();

    return (
        <div>
            <TextField id="outlined-basic" label="Titel" variant="outlined" value={data.Titel} name="Titel" onChange={handleChange} ></TextField>
            <TextField id="outlined-basic" label="Description of the post" variant="outlined" value={data.Descriptionofthepost} name="Descriptionofthepost" onChange={handleChange} ></TextField>
            <TextField id="outlined-basic" label="Price" variant="outlined" value={data.Price} name="Price" onChange={handleChange} ></TextField>
            <TextField id="outlined-basic" label="Type of service" variant="outlined" value={data.Typeofservice} name="Type of service" onChange={handleChange} ></TextField>
            <Button variant="contained">Submit</Button>
        </div >
    )


}

export default NewJob