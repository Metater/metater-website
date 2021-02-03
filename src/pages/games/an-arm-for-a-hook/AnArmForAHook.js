import React from 'react';
import './AnArmForAHook.css';
import Header from '../../../components/Header';

function Home() {
    return (
        <div className='template'>
            <div className='template__header'>
                <Header />
            </div>
            <div className='template__body'>
                <h1>An Arm for a Hook!</h1>
                <iframe title="An Arm for a Hook" frameBorder="0" src="https://itch.io/embed-upload/3278650?color=5ab8fc" allowFullScreen="false"
                        width="960" height="670"><a href="https://metater.itch.io/an-arm-for-a-hook">Play An Arm for a
                    Hook on itch.io</a></iframe>
                <div className='generalbg' />
            </div>
        </div>
    )
}

export default Home;