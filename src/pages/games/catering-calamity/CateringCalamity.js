import React from 'react';
import './CateringCalamity.css';
import Header from '../../../components/Header';

function Home() {
    return (
        <div className='template'>
            <div className='template__header'>
                <Header />
            </div>
            <div className='template__body'>
                <h1>Catering Calamity!</h1>
                <iframe title="Catering Calamity" frameBorder="0" src="https://itch.io/embed-upload/2912708?color=444444" allowFullScreen="false"
                        width="960" height="670"><a href="https://metater.itch.io/catering-calamity">Play Catering
                    Calamity on itch.io</a></iframe>
                <div className='generalbg' />
            </div>
        </div>
    )
}

export default Home;