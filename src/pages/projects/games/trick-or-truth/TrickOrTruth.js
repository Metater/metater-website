import React from 'react';
import './TrickOrTruth.css';
import Header from '../../../../components/Header';

function Home() {
    return (
        <div className='template'>
            <div className='template__header'>
                <Header />
            </div>
            <div className='template__body'>
                <h1>Trick or Truth!</h1>
                <iframe frameBorder="0" src="https://itch.io/embed-upload/2909412?color=808080" allowFullScreen="false"
                        width="960" height="670"><a href="https://metater.itch.io/trick-or-truth">Play Trick or Truth on
                    itch.io</a></iframe>
                <div className='generalbg' />
            </div>
        </div>
    )
}

export default Home;