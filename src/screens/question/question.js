//import Icon from '@material-ui/';
//import { AddCircleOutline } from '@material-ui/icon/';
import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './question.style';
import axios from 'axios';




const Question = () => {
    const classes = useStyles();
    const [question, setQuestion] = useState([]);

    const GetQuestionFromDB = async () => {
        const response = await axios.get("http://localhost/api/faq.php");
        setQuestion(response.data);

    }

    useEffect(() => {
        GetQuestionFromDB();
    }, []);
    return (
        <div>
            <Header />
            <div className={classes.root}>
                {
                    question.map((item) => {
                        return (
                            <div className={classes.questionBox}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}>{item.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {item.answer}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    )
}

export default Question;

