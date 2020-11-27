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
                <div className='metatertextimage' />
                <h1>I make games, make things and play games!</h1>
            </div>
        </div>
    )
}

export default Home;