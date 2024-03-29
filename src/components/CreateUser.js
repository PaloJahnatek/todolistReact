import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function CreateUser() {
    const [user, setUser] = useState({
        name: '',
        surname: '',
        nickname: '',
        email: '',
        age: '',
        password: '',
    });

    const handleChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        // Kontrola, či sú všetky povinné polia vyplnené
        if (!user.name || !user.surname || !user.nickname || !user.email || !user.age || !user.password) {
            alert('Please fill in all required fields.');
            return;
        }

        alert('User was created');

        axios.post(`http://localhost:8080/restuser`, {
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
            })
            .catch(error => {
                console.error('Error creating user:', error);
            });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group row mt-3">
                    <label htmlFor="colFormLabelLgName" className="col-3 col-form-label col-form-label-lg"><strong>Name :</strong></label>
                    <div className="col-sm-9">
                        <input name="name" className="form-control form-control-lg ml-2" id="colFormLabelLgName" placeholder="new user name" onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group row mt-3">
                    <label htmlFor="colFormLabelLgSurname" className="col-3 col-form-label col-form-label-lg"><strong>Surname :</strong></label>
                    <div className="col-sm-9">
                        <input name="surname" className="form-control form-control-lg ml-2" id="colFormLabelLgSurname" placeholder="new user surname" onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group row mt-3">
                    <label htmlFor="colFormLabelLgNickname" className="col-3 col-form-label col-form-label-lg"><strong>Nickname :</strong></label>
                    <div className="col-sm-9">
                        <input name="nickname" className="form-control form-control-lg ml-2" id="colFormLabelLgNickname" placeholder="new user nickname" onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group row mt-3">
                    <label htmlFor="colFormLabelLgEmail" className="col-3 col-form-label col-form-label-lg"><strong>Email :</strong></label>
                    <div className="col-sm-9">
                        <input name="email" type="email" className="form-control form-control-lg ml-2" id="colFormLabelLgEmail" placeholder="new user email" onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group row mt-3">
                    <label htmlFor="colFormLabelLgAge" className="col-3 col-form-label col-form-label-lg"><strong>Age :</strong></label>
                    <div className="col-sm-9">
                        <input name="age" className="form-control form-control-lg ml-2" id="colFormLabelLgAge" placeholder="new user age" onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group row mt-3">
                    <label htmlFor="colFormLabelLgPassword" className="col-3 col-form-label col-form-label-lg"><strong>Password :</strong></label>
                    <div className="col-sm-9">
                        <input name="password" type="password" className="form-control form-control-lg ml-2" id="colFormLabelLgPassword" placeholder="new user password" onChange={handleChange} />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block"><strong>CREATE USER</strong></button>


            </form>
        </div>
    );
}

export default CreateUser;
