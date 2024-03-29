import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams} from 'react-router-dom';
import queryString from "query-string";


function UserTasks() {
    const { id } = useParams();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/task/usertask/${id}`);
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, [id]);

    const deleteTask = async (taskId) => {
        if (window.confirm('Are you sure?')) {
            try {
                await axios.delete(`http://localhost:8080/task/${taskId}`);
                setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
            } catch (error) {
                console.error('Error deleting task:', error);
            }
        }
    };

    let url = queryString.parse(window.location.search);
    console.log(url);

    return (
        <div className="container">

                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="text-center mt-3">Tasks List of User with ID: {id}</h4>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th scope="col"><strong>Id</strong></th>
                                            <th scope="col"><strong>UserId</strong></th>
                                            <th scope="col"><strong>Name</strong></th>
                                            <th scope="col"><strong>Status</strong></th>
                                            <th scope="col"><strong>Category</strong></th>
                                            <th scope="col"><strong>Description</strong></th>
                                            <th scope="col"><strong>Created</strong></th>
                                            <th scope="col-5"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {tasks.map((task) => (
                                            <tr key={task.id}>
                                                <th scope="row"><a href={`/user/${task.id}`}>{task.id}</a></th>
                                                <td>{task.userId}</td>
                                                <td>{task.name}</td>
                                                <td>{task.status}</td>
                                                <td>{task.category}</td>
                                                <td>{task.description}</td>
                                                <td>{task.createdAt}</td>
                                                <td>
                                                    <Link to={`/user/${task.userId}/usertasks/edit/${task.id}`} className="btn btn-sm btn-primary">Edit Task<i className="far fa-edit ml-1"></i></Link>
                                                    <button onClick={() => deleteTask(task.id)} className="btn btn-sm btn-danger">Delete task<i className="far fa-edit"></i></button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    <div className="col-3 text-left">
                                        <Link to={`/user/${id}/usertasks/create`} className="btn btn-sm btn-primary">Create new Task <i className="far fa-edit ml-1"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
}

export default UserTasks;
