import React, { useEffect, useState } from "react";
import useStyles from './faqs.style'
import HeaderDashboard from "../../../components/headerDashboard/headerDashboard";
import NavbarDashboard from "../../../components/navbarDashboard/navbarDashboard";
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Faq = () => {
    const classes = useStyles();

    const [question, setQuestion] = useState([])
    const GetQuestionFromDB = async () => {
        const response = await axios.get("http://localhost/api/faq.php");
        setQuestion(response.data);
    }
    useEffect(() => {
        GetQuestionFromDB();
    }, []);

    const [data, setData] = useState({
        id: "",
        question: "",
        answer: "",
    });
    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    };
    const insertFaq = async () => {

        const faq = {
            id: data.id,
            question: data.question,
            answer: data.answer,
        };
        const response = await axios.post(
            'http://localhost/api/faq.php',
            faq,
            { headers: { 'Content-Type': 'application/json' } }
        )
    };

    const removefaq = async (faq, id) => {
      

        const res = await axios.delete('http://localhost/api/faq.php?faq_id=' + id,
            {},
            { headers: { 'Content-Type': 'application/json' } });

        if (res.data.isValid) {
            alert('deleted successfully ');
        }
        else {
            alert(res.data.errorMessage);
        }
    };


    return (
        <div className={classes.root}>
            <HeaderDashboard />
            <div className={classes.content}>
                <NavbarDashboard />
                <div className={classes.items}>
                    <h1 className={classes.title}>Faqs</h1>
                    <div className={classes.addSection}>
                        <TextField id="filled-basic" autoComplete='off' name="question" label="Question" variant="filled" onChange={handleChange} />
                        <TextField id="filled-basic" autoComplete='off' name="answer" label="Answer" variant="filled" onChange={handleChange} />
                        <Button variant="contained" color="primary" onClick={insertFaq}>
                            Add Question
                        </Button>
                    </div>

                    <div className={classes.item}>
                        <List>
                            {
                                question.map((faq) => {
                                    return (
                                        <div >
                                            <ListItem>
                                                <Accordion className={classes.AccordionMargin}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                    >
                                                        <Typography className={classes.heading}>{faq.question}</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            {faq.answer}
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Button onClick={(e) => {
                                                    removefaq(e, faq.id);
                                                }} variant="contained" color="secondary">
                                                    delete
                                            </Button>
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

export default Faq;