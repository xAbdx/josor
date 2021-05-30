import React, { useEffect, useState } from "react";
import useStyles from './CrudSkills.style';
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
import { Redirect } from 'react-router-dom';

const Skill = () => {
    const classes = useStyles();
    const [skill, setSkill] = useState([])
    const GetSkillFromDB = async () => {
        const response = await axios.get("http://localhost/api/userskills.php");
        setSkill(response.data);
    }
    useEffect(() => {
        GetSkillFromDB();
    }, []);
    const [data, setData] = useState({
        id: "",
        user: "",
        skill: "",
    });
    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    };
    const insertSkill = async () => {
        const skill = {
            id: data.id,
            user: data.user,
            skill: data.skill,
        };
        const response = await axios.post(
            'http://localhost/api/userskills.php',
            skill,
            { headers: { 'Content-Type': 'application/json' } }
        )
        window.location.reload(false);
    };
    const removeskill = async (skill, id) => {
        const res = await axios.delete('http://localhost/api/userskills.php?id=' + id,
            {},
            { headers: { 'Content-Type': 'application/json' } });
        if (res.data.isValid) {
            alert('deleted successfully');
        }
        else {
            alert(res.data.errorMessage);
        }
        window.location.reload(false);
    };
    if (localStorage.getItem('isAuthorized') === false || localStorage.getItem('isAuthorized') === null)
        return <Redirect to='/logind' />
    return (
        <div className={classes.root}>
            <HeaderDashboard />
            <div className={classes.content}>
                <NavbarDashboard />
                <div className={classes.items}>
                    <h1 className={classes.title}>Manage Skills</h1>
                    <div className={classes.addSection}>
                        <TextField id="filled-basic" autoComplete='off' name="user" label="Skill Name" variant="filled" onChange={handleChange} />
                        <TextField id="filled-basic" autoComplete='off' name="skill" label="Skill description" variant="filled" onChange={handleChange} />
                        <Button variant="contained" color="primary" onClick={insertSkill}>
                            Add Skills
                        </Button>
                    </div>
                    <div className={classes.item}>
                        <List>
                            {
                                skill.map((skill) => {
                                    return (
                                        <div >
                                            <ListItem>
                                                <Accordion className={classes.AccordionMargin}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                    >
                                                        <Typography className={classes.heading}>{skill.user}</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            {skill.skill}
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Button onClick={(e) => {
                                                    removeskill(e, skill.id);
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
export default Skill;