import React, { useEffect, useState } from "react";
import skill1 from "../../img/skill1.png";
import useStyles from './jobpost.style';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useRouteMatch } from "react-router-dom";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

// const job = {
//     id: 1,
//     title: "IT",
//     description: "here is all the new technologies  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
//     date: "December 8"
// }

const JobPost = (props) => {
    let { params } = useRouteMatch();

    const [jobsBySection, setJobsBySection] = useState([]);

    const GetJobsFromDB = async () => {
        const response = await axios.get("http://localhost/api/job-section.php?skill_id=" + params.id);
        // var p = response.data.price;
        if (response.data.length > 0)
            setJobsBySection(response.data);
        // console.log(response);
    }

    useEffect(() => {
        GetJobsFromDB();
    });


    const priceApplication = jobsBySection.map((data) => {
        return data.price
    });
    // console.log(priceApplication);

    const classes = useStyles();
    const history = useHistory();

    const [dataOfApplication, setDataOfApplication] = React.useState({
        id: "",
        status: "on",
        clientId: "",
        serviceProviderId: "",
        deliveryDate: "",
        price: "",
    });

    // const handleChange = (event) => {
    //     setDataOfApplication({ ...dataOfApplication, [event.target.name]: event.target.value })
    // };

    const sendApplication = async () => {
        const jobApplication = {
            id: dataOfApplication.id,
            status: "on",
            clientId: dataOfApplication.clientId,
            serviceProviderId: localStorage.getItem('userID'),
            deliveryDate: selectedDate,
            price: priceApplication[0],
        };

        const response = await axios.post(
            'http://localhost/api/jobApplication.php',
            jobApplication,
            { headers: { 'content-type': 'multipart/form-data' } }
        )
        if (response.data) {
            alert('Submitted successfully!');
        }
        alert("Your application has been sent");
        console.log(jobApplication);
        history.push('/');
    };

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange1 = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <Header />
            <div className={classes.root}>
                <Card className={classes.card}>
                    <div>
                        <CardMedia
                            className={classes.media}
                            image={skill1}
                            title=""
                        />
                    </div>
                    {jobsBySection.map((data, idx) => {
                        return (
                            <div key={idx}>
                                <div className={classes.leftColumn}>
                                    <div>
                                        <CardContent>
                                            <Typography className={classes.title} gutterBottom>
                                                {data.title}
                                            </Typography>
                                            {/* <Typography className={classes.date} color="textSecondary">
                                                {data.date}
                                            </Typography> */}
                                            <Typography variant="body2" component="p" className={classes.description}>
                                                {data.description}
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </div>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justifyContent="space-around">
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Delivery Date"
                                            format="MM/dd/yyyy"
                                            name="deliveryDate"
                                            value={selectedDate}
                                            onChange={handleDateChange1}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                                <div className={classes.rightColumn}>
                                    <p className={classes.priceContainer}>Price: <span className={classes.price}>${data.price}</span></p>
                                    <Button className={classes.btn} variant="contained" onClick={sendApplication}>Apply</Button>
                                </div>
                            </div>
                        )
                    })}
                </Card>
            </div>
            <Footer />
        </div>
    );
}
export default JobPost;