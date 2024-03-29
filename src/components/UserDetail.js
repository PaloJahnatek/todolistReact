import React, {useState, useEffect} from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from "react-router-dom";

function UserDetail() {

    const {id} = useParams();

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/restuser/${id}`)
            .then(res => {
                const user = res.data;
                setUser(user);
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
            });
    }, [id]);


    return (
        <div>

            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-8 '>
                         <div className='card mb-3'>
                             <div className='card-header bg-success text-white'>User Details</div>
                                <div className='card-body'>
                                     <div className='table-responsive'>
                                        <table className='table table-striped table-responsive-sm'>

                                            <tbody>
                                            <tr>
                                                <th scope='row'>Id</th>
                                                <td><a href={`/user/${user.id}`}>{user.id}</a></td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Name</th>
                                                <td><a href={`/user/${user.name}`}>{user.name}</a></td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Surname</th>
                                                <td><a href={`/user/${user.surname}`}>{user.surname}</a></td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Nickname</th>
                                                <td><a href={`/user/${user.nickname}`}>{user.nickname}</a></td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Email</th>
                                                <td><a href={`/user/${user.email}`}>{user.email}</a></td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Age</th>
                                                <td><a href={`/user/${user.age}`}>{user.age}</a></td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Password</th>
                                                <td><a href={`/user/${user.password}`}>{user.password}</a></td>
                                            </tr>

                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
}

export default UserDetail;