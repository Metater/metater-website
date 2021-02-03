import React from 'react';
import './Utils.css';
import Header from '../../components/Header';

function Home() {
    return (
        <div className='template'>
            <div className='template__header'>
                <Header />
            </div>
            <div className='template__body'>
                <div className='generalbg' />
                <h1>I have all my utilities, or tools based on other things. Right now, all I have is a web-based WIP hypixel api best-minion, and other data finder.</h1>
            </div>
        </div>
    )
}

export default Home;