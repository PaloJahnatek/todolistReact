import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import queryString from 'query-string';

const UserTasksEdit = () => {
    const { taskId } = useParams();
    const [task, setTask] = useState({});
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8080/task/${taskId}`)
            .then(res => {
                setTask(res.data);
            })
    }, [taskId]);

    const handleChange = event => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'status':
                setStatus(value);
                break;
            case 'category':
                setCategory(value);
                break;
            case 'description':
                setDescription(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        alert('User was submitted ');

        axios.patch(`http://localhost:8080/task/${taskId}`, {
            name: name || task.name,
            status: status || task.status,
            category: category || task.category,
            description: description || task.description,
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }

    let url = queryString.parse(window.location.search);
    console.log(url);

    return (
        <div className="container">
            <h4 className="text-center mt-3">Edit task with ID: {taskId}</h4>
            <form onSubmit={handleSubmit}>

                <div className="form-group row mt-3">
                    <label htmlFor="colFormLabelLg" className="col-4 col-form-label col-form-label-lg text-left">
                        Name: <strong className="text-info">{task.name}</strong>
                    </label>
                    <div className="col-8">
                        <input
                            type="text"
                            name="name"
                            className="form-control form-control-lg ml-2"
                            id="colFormLabelLg"
                            placeholder="new task name"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <label htmlFor="colFormLabelLg" className="col-4 col-form-label col-form-label-lg text-left">
                        Status : <strong className="text-info">{task.status}</strong>
                    </label>
                    <div className="col-8">
                        <input
                            type="text"
                            name="staus"
                            className="form-control form-control-lg ml-2"
                            id="colFormLabelLg"
                            placeholder="new task status"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <label htmlFor="colFormLabelLg" className="col-4 col-form-label col-form-label-lg text-left">
                        Category : <strong className="text-info">{task.category}</strong>
                    </label>
                    <div className="col-8">
                        <input
                            type="text"
                            name="category"
                            className="form-control form-control-lg ml-2"
                            id="colFormLabelLg"
                            placeholder="new task category"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <label htmlFor="colFormLabelLg" className="col-4 col-form-label col-form-label-lg text-left">
                       Description : <strong className="text-info">{task.description}</strong>
                    </label>
                    <div className="col-8">
                        <input
                            type="text"
                            name="description"
                            className="form-control form-control-lg ml-2"
                            id="colFormLabelLg"
                            placeholder="new task description"
                            onChange={handleChange}
                        />
                    </div>
                </div>


                <button type='submit' className='btn btn-primary btn-lg btn-block w-100 mt-3'><strong>Save Changes</strong></button>

            </form>
        </div>
    );
}

export default UserTasksEdit;
