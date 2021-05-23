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
    ];

    // const [columns, setColumns] = useState([
    //     { title: 'Id', field: 'id' },
    //     { title: 'Name', field: 'name' },
    //     { title: 'Email', field: 'email' },
    //     { title: 'Phone', field: 'phone', type: 'numeric' },
    // ]);

    const [data, setData] = useState([])
    const GetUsersFromDB = async () => {
        const response = await axios.get("http://localhost/api/Users.php");
        setData(response.data);
    }
    useEffect(() => {
        GetUsersFromDB();
    }, []);


    const removeUser = async (data) => {
        const res = await axios.delete('http://localhost/api/user.php?user_id=' + data['id'],
        {},
        { headers: { 'Content-Type': 'application/json' } }
    );
    if (res.data.isValid) {
        alert('deleted successfully ');
    }
    else {
        alert(res.data.errorMessage);
    }
       }

       const addUser = async (data) => {

        console.log(data);
    //     const res = await axios.delete('http://localhost/api/user.php?user_id=' + data['id'],
    //     {},
    //     { headers: { 'Content-Type': 'application/json' } }
    // );
    // if (res.data.isValid) {
    //     alert('deleted successfully ');
    // }
    // else {
    //     alert(res.data.errorMessage);
    // }
       }

       const updateUser= async(newData,oldData)=>{
           console.log('old data');
           console.log(oldData);

           console.log('new data');
           console.log(newData);
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
                   
                    <div className={classes.table1}>
                        <MaterialTable
                            title="Simple Action Preview"
                            columns={columns}
                            data={data}
                            editable={{
                                onRowAdd: (newData) =>
                                    new Promise((resolve, reject) => {
                                        addUser(newData);
                                        setTimeout(() => {
                                            setData([...data, newData]);

                                            resolve();
                                        }, 1000)
                                    }),
                                onRowUpdate: (newData, oldData) =>
                                    new Promise((resolve, reject) => {

                                        updateUser(newData,oldData);
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
                                       removeUser(oldData);
                                        setTimeout(() => {
                                            const dataDelete = [...data];
                                            const index = oldData.tableData.id;
                                            dataDelete.splice(index, 1);
                                            setData([...dataDelete]);
                                            //  removeU0ser(index);

                                            resolve()
                                        }, 1000)

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