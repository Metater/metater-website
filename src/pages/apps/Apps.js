import React from 'react';
import './Apps.css';
import Header from '../../components/Header';

function Home() {
    return (
        <div className='template'>
            <div className='template__header'>
                <Header />
            </div>
            <div className='template__body'>
                <div className='generalbg' />
                <h1>I have all my non-web apps here!</h1>
            </div>
        </div>
    )
}

export default Home;

//This includes Nummus, Memini a    nd Verrat!