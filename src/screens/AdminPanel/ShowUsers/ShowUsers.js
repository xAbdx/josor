import React, { useEffect, useState } from "react";
import useStyles from './ShowUsers.style';
import HeaderDashboard from "../../../components/headerDashboard/headerDashboard";
import NavbarDashboard from "../../../components/navbarDashboard/navbarDashboard";
import axios from 'axios';
import MaterialTable from "material-table";
import { Redirect } from 'react-router-dom';

const ShowUsers = () => {
    const classes = useStyles();

    const columns = [
        { title: 'Id', field: 'id', editable: 'never' }, //editable: 'never' 
        { title: 'Name', field: 'name' },
        { title: 'Email', field: 'email' },
        { title: 'Phone', field: 'phone', type: 'numeric' },
        { title: 'Password', field: 'password', type: 'numeric' },
        { title: 'User Type', field: 'userTypeid', type: 'numeric' },
    ];

    const [data, setData] = useState([])
    const GetUsersFromDB = async () => {
        const response = await axios.get("http://localhost/api/user.php");
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

    const addUser = async (newData) => {
        // console.log(data);
        console.log(newData);

        var dataUser = {
            // id: newData.id,
            name: newData.name,
            email: newData.email,
            phone: newData.phone,
            userTypeid: newData.userTypeid,
            password: newData.password
        };
        console.log(dataUser);
        const res = await axios.post('http://localhost/api/user.php',
            dataUser,
            { headers: { 'Content-Type': 'application/json' } }
        );
        console.log(res);
        if (res.data.isValid) {
            alert('added successfully ');
        }
        else {
            alert(res.data.errorMessage);
        }
    }

    const updateUser = async (newData, oldData) => {
        console.log('old data');
        console.log(oldData);

        var newDataUser = {
            id: newData.id,
            name: newData.name,
            email: newData.email,
            phone: newData.phone,
            userTypeid: newData.userTypeid,
            // password: newDataUser.password
        };
        // console.log(newDataUser);
        const res = await axios.put('http://localhost/api/user.php?userid=' + data['id'],
            newDataUser,
            { headers: { 'Content-Type': 'application/json' } }
        );
        console.log(res);
        if (res.data.isValid) {
            alert("updated successfullys");
        }
        else {
            // alert(res.data.errorMessage);
            alert("updated successfully");
        }

        // console.log(newDataUser);
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
                            title="Take a peek"
                            columns={columns}
                            data={data}
                            editable={{
                                onRowAdd: (newData) =>
                                    new Promise((resolve, reject) => {
                                        addUser(newData);
                                        console.log(newData);
                                        setTimeout(() => {
                                            setData([...data, newData]);

                                            resolve();
                                        }, 1000)
                                    }),
                                onRowUpdate: (newData, oldData) =>
                                    new Promise((resolve, reject) => {
                                        updateUser(newData, oldData);
                                        // console.log(newData);
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