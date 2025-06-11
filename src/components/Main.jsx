import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <section className="hero-section">
            <div className='container'>
                <div className="hero-title">
                    <h3>MovieSearch ...</h3>
                </div>
                <div className='hero-description fl-jc-ai'>
                    <div className='hero-details'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas, quis dolorum officia minus corporis possimus, perferendis velit illo quaerat. Inventore voluptas, quis dolorum officia minus corporis possimus, perferendis velit illo quaerat.</p>
                    </div>
                    <div className='second-details fl-jc-ai'>
                        <Link to="/" className='btn hero-btn'>Start the Search</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;