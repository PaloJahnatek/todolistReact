import React, {useState, useEffect} from 'react';
import axios from 'axios';
import queryString from 'query-string';
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserDetailEdit() {

    const {id} = useParams();

    const [user, setUser] = useState({
        name: '',
        surname: '',
        nickname: '',
        email: '',
        age: '',
        password: '',
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/restuser/${id}`)
            .then(res => {
                const userData = res.data;
                setUser(userData);
            })
    }, [id]);

    const handleChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        alert('User was submitted');

        axios.patch(`http://localhost:8080/restuser/${id}`, {
            name: user.name,
            surname: user.surname,
            nickname: user.nickname,
            email: user.email,
            age: user.age,
            password: user.password,
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }

    let url = queryString.parse(window.location.search);
    console.log(url);

    return (
        <div>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group row mt-3'>
                        <label htmlFor='colFormLabelLg'
                               className='col-4 col-form-label col-form-label-lg text-left'>
                            Name : <strong className='text-info'>{user.name}</strong>
                        </label>
                        <div className='col-8'>
                            <input
                                name='name'
                                className='form-5 form-control form-control-lg ml-2'
                                id='colFormLabelLg'
                                placeholder='new user name'
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='form-group row mt-3'>
                        <label htmlFor='colFormLabelLg'
                               className='col-4 col-form-label col-form-label-lg text-left'>
                            Surname : <strong className='text-info'>{user.surname}</strong>
                        </label>
                        <div className='col-8'>
                            <input
                                name='surname'
                                className='form-5 form-control form-control-lg ml-2'
                                id='colFormLabelLg'
                                placeholder='new user surname'
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='form-group row mt-3'>
                        <label htmlFor='colFormLabelLg'
                               className='col-4 col-form-label col-form-label-lg text-left'>
                            Nickname : <strong className='text-info'>{user.nickname}</strong>
                        </label>
                        <div className='col-8'>
                            <input
                                name='nickname'
                                className='form-5 form-control form-control-lg ml-2'
                                id='colFormLabelLg'
                                placeholder='new user nickname'
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='form-group row mt-3'>
                        <label htmlFor='colFormLabelLg'
                               className='col-4 col-form-label col-form-label-lg text-left'>
                            Email : <strong className='text-info'>{user.email}</strong>
                        </label>
                        <div className='col-8'>
                            <input
                                name='email'
                                className='form-5 form-control form-control-lg ml-2'
                                id='colFormLabelLg'
                                placeholder='new user email'
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='form-group row mt-3'>
                        <label htmlFor='colFormLabelLg'
                               className='col-4 col-form-label col-form-label-lg text-left'>
                            Age : <strong className='text-info'>{user.age}</strong>
                        </label>
                        <div className='col-8'>
                            <input
                                name='age'
                                className='form-5 form-control form-control-lg ml-2'
                                id='colFormLabelLg'
                                placeholder='new user age'
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='form-group row mt-3'>
                        <label htmlFor='colFormLabelLg'
                               className='col-4 col-form-label col-form-label-lg text-left'>
                            Password : <strong className='text-info'>{user.password}</strong>

                        </label>
                        <div className='col-8'>
                            <input
                                name='password'
                                className='form-5 form-control form-control-lg ml-2'
                                id='colFormLabelLg'
                                placeholder='new user email'
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button type='submit' className='btn btn-primary btn-lg w-100 mt-3'>Save Changes</button>

                </form>
            </div>
        </div>
    );
}

export default UserDetailEdit;