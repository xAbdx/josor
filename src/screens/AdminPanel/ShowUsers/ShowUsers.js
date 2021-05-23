import React, { useEffect, useState } from "react";
import useStyles from './ShowUsers.style';
import HeaderDashboard from "../../../components/headerDashboard/headerDashboard";
import NavbarDashboard from "../../../components/navbarDashboard/navbarDashboard";
import axios from 'axios';
// import { DataGrid } from '@material-ui/data-grid';
// import Button from '@material-ui/core/Button';
// import { FaUserEdit } from 'react-icons/fa';
// import { TiUserDelete } from 'react-icons/ti';
import MaterialTable from "material-table";
import { Redirect } from 'react-router-dom';

const ShowUsers = () => {
    const classes = useStyles();

    // const columns = [
    //     { field: 'id', headerName: 'ID', width: 170 },
    //     { field: 'name', headerName: 'Name', width: 130 },
    //     { field: 'email', headerName: 'Email', width: 130 },
    //     {
    //         field: 'phone',
    //         headerName: 'Phone',
    //         type: 'number',
    //         width: 130,
    //     }
    // ];

    const columns = [
        { title: 'Id', field: 'id' },
        { title: 'Name', field: 'name' },
        { title: 'Email', field: 'email' },
        { title: 'Phone', field: 'phone', type: 'numeric' },
        { title: 'User Type', field: 'userTypeid', type: 'numeric' },
    ];

    // const [columns, setColumns] = useState([
    //     { title: 'Id', field: 'id' },
    //     { title: 'Name', field: 'name' },
    //     { title: 'Email', field: 'email' },
    //     { title: 'Phone', field: 'phone', type: 'numeric' },
    // ]);

    const [data, setData] = useState([])
    const GetUsersFromDB = async () => {
        const response = await axios.get("http://localhost/api/user.php");
        setData(response.data);
        console.log(response);
    }
    useEffect(() => {
        GetUsersFromDB();
    }, []);

    const removeUser = async (user, id) => {
        console.log(user.target.value);
        console.log(id);

        const res = await axios.delete('http://localhost/api/user.php?user_id=' + id,
            {},
            { headers: { 'Content-Type': 'application/json' } }
        );
        console.log(res);
        if (res.data.isValid) {
            alert('deleted successfully ');
        }
        else {
            alert(res.data.errorMessage);
        }
    }

    if (localStorage.getItem('isAuthorized') === false || localStorage.getItem('isAuthorized') === null)
        return <Redirect to='/logind' />

    return (
        <div className={classes.root}>
            <HeaderDashboard />
            <div className={classes.content}>
                <NavbarDashboard />
                <div className={classes.table}>
                    <h1>Users</h1>
                    {/* <div style={{ height: '400px', width: '95%' }}>
                        <DataGrid rows={users} columns={columns} pageSize={50} />
                    </div> */}
                    {/* <div style={{ height: '400px', width: '95%' }}>
                        <DataGrid rows={users} columns={columns} pageSize={5} checkboxSelection />
                    </div> */}
                    <div className={classes.table1}>
                        <MaterialTable
                            title="Take a peek"
                            columns={columns}
                            data={data}
                            editable={{
                                onRowAdd: newData =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                            setData([...data, newData]);

                                            resolve();
                                        }, 1000)
                                    }),
                                onRowUpdate: (newData, oldData) =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                            const dataUpdate = [...data];
                                            const index = oldData.tableData.id;
                                            dataUpdate[index] = newData;
                                            setData([...dataUpdate]);

                                            resolve();
                                        }, 1000)
                                    }),
                                onRowDelete: oldData =>
                                    new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                            const dataDelete = [...data];
                                            const index = oldData.tableData.id;
                                            dataDelete.splice(index, 1);
                                            setData([...dataDelete]);
                                            //  removeU0ser(index);

                                            resolve()
                                        }, 1000)
                                        console.log(this);
                                    }),
                            }}
                            options={{
                                actionsColumnIndex: -1
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowUsers;