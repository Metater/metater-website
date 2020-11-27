import React from 'react';
import './Other.css';
import Header from '../../../components/Header';

function Home() {
    return (
        <div className='template'>
            <div className='template__header'>
                <Header />
            </div>
            <div className='template__body'>
                <div className='generalbg' />
                <h1>I have all my other projects here!</h1>
            </div>
        </div>
    )
}

export default Home;