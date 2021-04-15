import React, { useEffect, useState } from "react";
import useStyles from './ShowUsers.style';
import HeaderDashboard from "../../../components/headerDashboard/headerDashboard";
import NavbarDashboard from "../../../components/navbarDashboard/navbarDashboard";
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';

const ShowUsers = () => {
    const classes = useStyles();

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'phone',
            headerName: 'Phone',
            type: 'number',
            width: 130,
        },
    ];

    const [users, setUsers] = useState([])
    const GetUsersFromDB = async () => {
        const response = await axios.get("http://localhost/api/Users.php");
        setUsers(response.data);
        console.log(response);
    }
    useEffect(() => {
        GetUsersFromDB();
    }, []);

    return (
        <div className={classes.root}>
            <HeaderDashboard />
            <div className={classes.content}>
                <NavbarDashboard />
                <div className={classes.table}>
                    <h1>Users</h1>
                    <div style={{ height: '400px', width: '95%' }}>
                        <DataGrid rows={users} columns={columns} pageSize={5} checkboxSelection />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowUsers;