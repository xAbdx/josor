import React, { useEffect, useState } from "react";
import useStyles from './CrudMessages.style'
import HeaderDashboard from "../../../components/headerDashboard/headerDashboard";
import NavbarDashboard from "../../../components/navbarDashboard/navbarDashboard";
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';

const CrudMessages = () => {
    const classes = useStyles();

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'email', headerName: 'Email', width: 250 },
    ];

    const [email, setEmail] = useState([])
    const GetEmailFromDB = async () => {
        const response = await axios.get("http://localhost/api/contact-us.php");
        setEmail(response.data);
        console.log(response);
    }
    useEffect(() => {
        GetEmailFromDB();
    }, []);

    return (
        <div className={classes.root}>
            <HeaderDashboard />
            <div className={classes.content}>
                <NavbarDashboard />
                <div className={classes.table}>
                    <h1>Emails</h1>
                    <div style={{ height: '400px', width: '95%' }}>
                        <DataGrid rows={email} columns={columns} pageSize={5} checkboxSelection />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CrudMessages;