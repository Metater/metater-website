import React from 'react';
import './OldWestTycoon.css';
import Header from '../../../components/Header';

function Home() {
    return (
        <div className='template'>
            <div className='template__header'>
                <Header />
            </div>
            <div className='template__body'>
                <h1>Old West Tycoon!</h1>
                <iframe title="Old West Tycoon" frameBorder="0" src="https://itch.io/embed-upload/3389576?color=743f39" allowFullScreen="false"
                        width="960" height="670"><a href="https://jmanholt929.itch.io/old-west-tycoon">Play Old West
                    Tycoon on itch.io</a></iframe>
                <div className='generalbg' />
            </div>
        </div>
    )
}

export default Home;