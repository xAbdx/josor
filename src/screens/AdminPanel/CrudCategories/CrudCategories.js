import React, { useEffect, useState } from "react";
import useStyles from './CrudCategories.style'
import HeaderDashboard from "../../../components/headerDashboard/headerDashboard";
import NavbarDashboard from "../../../components/navbarDashboard/navbarDashboard";
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';

const CrudCategories = () => {
    const classes = useStyles();

    const [categories, setCategories] = useState([])
    const GetCategoriesFromDB = async () => {
        const response = await axios.get("http://localhost/api/skills.php");
        setCategories(response.data);
       
    }
    useEffect(() => {
        GetCategoriesFromDB();
    }, []);

    const [data, setData] = useState({
        id: "",
        name: "",
    });
    const handleChange = (event) => {
       
        setData({ ...data, [event.target.name]: event.target.value })
    };
    const insertCategory = async () => {
       
        const category = {
            id: data.id,
            name: data.name,
        };
        const response = await axios.post(
            'http://localhost/api/skills.php',
            category,
            { headers: { 'Content-Type': 'application/json' } }
        )
   
    };

    const removeCategory = async (category, id) => {
       

        const res = await axios.delete('http://localhost/api/skills.php',
            { data: { categoryid: id } },
            { headers: { 'Content-Type': 'application/json' } }
        );


        // await axios.delete(
        //     'http://localhost/api/skills.php',
        //     { headers: { 'Content-Type': 'application/json' } }
        // )
        if (res.data.isValid) {
            alert('deleted successfully ');
        }
        else {
            alert(res.data.errorMessage);
        }
    };

    if (localStorage.getItem('isAuthorized') === false || localStorage.getItem('isAuthorized') === null)
        return <Redirect to='/logind' />

    return (
        <div className={classes.root}>
            <HeaderDashboard />
            <div className={classes.content}>
                <NavbarDashboard />
                <div className={classes.items}>
                    <h1 className={classes.title}>Manage Categories</h1>
                    <div className={classes.addSection}>
                        <TextField id="filled-basic" name="name" label="Category name" variant="filled" onChange={handleChange} />

                        <Button variant="contained" color="primary" onClick={insertCategory}>
                            Add category
                        </Button>
                    </div>

                    <div className={classes.item}>
                        <List>
                            {categories.map((category) => {
                                return (
                                    <div>
                                        <ListItem>
                                            <ListItemText primary={category.name} />
                                            <Button onClick={(e) => {
                                                removeCategory(e, category.id);
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

export default CrudCategories;