import React, { useEffect, useState } from "react";
import useStyles from './CrudMessages.style'
import HeaderDashboard from "../../../components/headerDashboard/headerDashboard";
import NavbarDashboard from "../../../components/navbarDashboard/navbarDashboard";
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const CrudMessages = () => {
    const classes = useStyles();

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'email', headerName: 'Email', width: 250 },
        {
            field: 'contactViaEmail', headerName: 'Contact via email', width: 250,
            renderCell: (params) => (
                <Button
                    onClick={() => window.open("https://mail.google.com/", "_blank")}
                    title="support@example.com"
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                >
                    Contact via email
                </Button>
            )
        },
    ];

    const [email, setEmail] = useState([])
    const GetEmailFromDB = async () => {
        const response = await axios.get("http://localhost/api/contact-us.php");
        setEmail(response.data);
    
    }
    useEffect(() => {
        GetEmailFromDB();
    }, []);

    if (localStorage.getItem('isAuthorized') === false || localStorage.getItem('isAuthorized') === null)
        return <Redirect to='/logind' />

    return (
        <div className={classes.root}>
            <HeaderDashboard />
            <div className={classes.content}>
                <NavbarDashboard />
                <div className={classes.table}>
                    <h1>Emails</h1>
                    {/* <div style={{ height: '400px', width: '95%' }}>
                        <DataGrid rows={email} columns={columns} pageSize={5} checkboxSelection />
                    </div> */}
                    <div style={{ height: '400px', width: '75%' }}>
                        <DataGrid
                            columns={columns}
                            rows={email}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CrudMessages;