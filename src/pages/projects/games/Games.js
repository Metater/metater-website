import React from 'react';
import './Games.css';
import Header from '../../../components/Header';

function Home() {
    return (
        <div className='template'>
            <div className='template__header'>
                <Header />
            </div>
            <div className='template__body'>
                <h1>Here are the games I have made with Vindico and jmanholt929!</h1>
                <iframe frameBorder="0" src="https://itch.io/embed-upload/2909412?color=808080" allowFullScreen="false"
                        width="960" height="670"><a href="https://metater.itch.io/trick-or-truth">Play Trick or Truth on
                    itch.io</a></iframe>
                <iframe frameBorder="0" src="https://itch.io/embed-upload/2912708?color=444444" allowFullScreen="false"
                        width="960" height="670"><a href="https://metater.itch.io/catering-calamity">Play Catering
                    Calamity on itch.io</a></iframe>
                <div className='generalbg' />
            </div>
        </div>
    )
}

export default Home;