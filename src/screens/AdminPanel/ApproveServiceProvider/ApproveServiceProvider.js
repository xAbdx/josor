import React, { useEffect, useState } from "react";
import useStyles from './ApproveServiceProvider.style';
import HeaderDashboard from "../../../components/headerDashboard/headerDashboard";
import NavbarDashboard from "../../../components/navbarDashboard/navbarDashboard";
import { Redirect } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';

const ApproveServiceProvider = () => {
    const classes = useStyles();

    const [data, setData] = useState([])
    const GetHireMeDataFromDB = async () => {
        const response = await axios.get("http://localhost/api/HireMe.php");
        setData(response.data);
        console.log(response.data);
    }
    useEffect(() => {
        GetHireMeDataFromDB();
    }, []);

    if (localStorage.getItem('isAuthorized') === false || localStorage.getItem('isAuthorized') === null)
        return <Redirect to='/logind' />

    return (
        <div className={classes.root}>
            <HeaderDashboard />
            <div className={classes.content}>
                <NavbarDashboard />
                <div className={classes.items}>
                    <h1 className={classes.title}>Hire Me data</h1>
                    <div className={classes.item}>
                        <List>
                            {
                                data.map((item) => {
                                    return (
                                        <div >
                                            <ListItem>
                                                <Accordion className={classes.AccordionMargin}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                    >
                                                        <Typography className={classes.heading}><strong>Service Provider Id:</strong> {item.id}</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            <strong>Email:</strong> {item.email}
                                                        </Typography>
                                                    </AccordionDetails>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            <strong>Skill Number:</strong> {item.skills}
                                                        </Typography>
                                                    </AccordionDetails>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            <strong>Disability Number: </strong>{item.kind_of_disability}
                                                        </Typography>
                                                    </AccordionDetails>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            <strong>Image Path Name: </strong>{item.imagePath}
                                                            {/* <CardMedia
                                                                className={classes.media}
                                                                image={item.upload_name}
                                                                title="Paella dish"
                                                            /> */}
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </ListItem>
                                            <Divider />
                                        </div>
                                    )
                                })}
                        </List>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApproveServiceProvider;