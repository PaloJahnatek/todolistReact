import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import queryString from "query-string";
import Footer from "./Footer";


const User = () => {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/restuser');
            const usersData = response.data;
            setUsers(usersData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])


    const deleteUser = async (id) => {
        if (window.confirm('Are you sure?')) {
            try {
                await axios.delete(`http://localhost:8080/restuser/${id}`);
                setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        }
    };

    let url = queryString.parse(window.location.search);
    console.log(url);

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body'>
                                <h4 className='text-center'>Users List</h4>
                                <div className='table-responsive'>
                                    <table className='table table-striped'>
                                        <thead>
                                        <tr>
                                            <th scope='col'><strong>Id</strong></th>
                                            <th scope='col'><strong>Name</strong></th>
                                            <th scope='col'><strong>Surname</strong></th>
                                            <th scope='col'><strong>Nickname</strong></th>
                                            <th scope='col'><strong>Email</strong></th>
                                            <th scope='col'><strong>Age</strong></th>
                                            <th scope='col'><strong>Password</strong></th>
                                            <th scope="col-5"></th>
                                        </tr>
                                        </thead>

                                        {users.map(user => (
                                            <tbody key={user.id}>
                                            <tr>
                                                <th scope="row">
                                                    <Link to={`/user/${user.id}`}>{user.id}</Link></th>
                                                <td>{user.name}</td>
                                                <td>{user.surname}</td>
                                                <td>{user.nickname}</td>
                                                <td>{user.email}</td>
                                                <td>{user.age}</td>
                                                <td>{user.password}</td>

                                                <td>
                                                    <Link to={`/user/${user.id}/tasks`}
                                                          className="btn btn-sm btn-success">
                                                        Tasks <i className="far fa-edit ml-1"></i>
                                                    </Link>

                                                    <Link to={`/user/${user.id}/edit`}
                                                          className="btn btn-sm btn-primary">
                                                        Edit User <i className="far fa-edit ml-1"></i>
                                                    </Link>


                                                    {/*<a href="#" onClick={() => deleteUser(user.id)}*/}
                                                    {/*   className="btn btn-sm btn-danger">*/}
                                                    {/*    Delete User <i className="far fa-edit"></i>*/}
                                                    {/*</a>*/}
                                                    <button onClick={() => deleteUser(user.id)}
                                                            className="btn btn-sm btn-danger">
                                                        Delete User <i className="far fa-edit"></i>
                                                    </button>

                                                </td>


                                            </tr>
                                            </tbody>
                                        ))}


                                    </table>

                                    <div className='col-3 text-left'>
                                        <Link to={`/user/create`} className="btn btn-sm btn-primary">
                                            Create new User <i className="far fa-edit ml-1"></i>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
};

export default User;