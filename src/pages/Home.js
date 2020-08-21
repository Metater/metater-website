import React from 'react';
import './Home.css';
import Header from '../components/Header';

function Home() {
    return (
        <div className='home'>
            <div className='home__header'>
                <Header />
            </div>

            <div className='home__body'>
                <h1>This is a homepage</h1>
            </div>
        </div>
    )
}

export default Home;