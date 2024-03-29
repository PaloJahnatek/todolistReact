import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import queryString from "query-string";

const UserTaskCreate = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (event) => {
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
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Kontrola, či sú všetky povinné polia vyplnené
        if (!name || !status || !category || !description) {
            alert('Please fill in all required fields.');
            return;
        }

        axios
            .post(`http://localhost:8080/task`, {
                userId: id,
                name: name,
                status: status,
                category: category,
                description: description,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                alert('Task was created successfully.');
            })
            .catch((error) => {
                console.error('Error creating task:', error);
                alert('Error creating task. Please try again.');
            });
    };


    let url = queryString.parse(window.location.search);
    console.log(url);

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group row mt-3">
                    <label htmlFor="name" className="col-2 col-form-label col-form-label-lg"><strong>Name:</strong></label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name="name"
                            className="form-control form-control-lg ml-2"
                            id="name"
                            placeholder="New user name"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group row mt-3">
                    <label htmlFor="status" className="col-2 col-form-label col-form-label-lg"><strong>Status:</strong></label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name="status"
                            className="form-control form-control-lg ml-2"
                            id="status"
                            placeholder="New user surname"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group row mt-3">
                    <label htmlFor="category" className="col-2 col-form-label col-form-label-lg"><strong>Category:</strong></label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name="category"
                            className="form-control form-control-lg ml-2"
                            id="category"
                            placeholder="New user nickname"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group row mt-3">
                    <label htmlFor="description" className="col-2 col-form-label col-form-label-lg"><strong>Description:</strong></label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            name="description"
                            className="form-control form-control-lg ml-2"
                            id="description"
                            placeholder="New user email"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block"><strong>CREATE TASK</strong></button>
            </form>
        </div>
    );
};

export default UserTaskCreate;
