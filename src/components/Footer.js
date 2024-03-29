import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    An illustration of a Spring Boot application utilizing React JS as the Frontend.
                </p>
                {/*<p className='footer-subscription-text'>*/}
                {/*    PAĽO*/}
                {/*</p>*/}


            </section>

            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            PAĽO
                        </Link>
                    </div>



                    <small className='website-rights'>©Pavol Jahnátek 2024</small>


                </div>
            </section>
        </div>
    );
}

export default Footer;