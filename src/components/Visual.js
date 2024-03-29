import React from 'react';
import '../App.css';
import './Visual.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "./Button";

function Visual() {
    return (

        <div className='visual-container'>
            <video src='/video/night-sky.mp4' autoPlay loop muted/>
            <h1>TodoList Application</h1>
            <p> Responsive Full-Stack Spring boot, ReactJs and MySql web application</p>
            <div className='visual-btns'>
                <Link to='/users'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        Users

                    </Button>
                </Link>




                <Link to='/about'>
                    <Button
                        className='btn'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                    >

                        About
                    </Button>
                </Link>

            </div>
        </div>
    );
}

export default Visual;