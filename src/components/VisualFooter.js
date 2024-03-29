import React from 'react';
import './VisualFooter.css';
import { Link } from 'react-router-dom';

function VisualFooter() {
    return (
        <div className='visual-footer-container'>
            <section className='visual-footer-subscription'>

            </section>

            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='visual-footer-logo'>
                        <Link to='/' className='home-logo'>
                            PAĽO
                        </Link>
                    </div>



                    <small className='web-rights'>©Pavol Jahnátek 2024</small>


                </div>
            </section>
        </div>
    );
}

export default VisualFooter;