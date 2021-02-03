import React from 'react';
import './Home.css';
import Header from '../components/Header';
import GitHubPic from "../images/GitHub-Mark-Light-120px-plus.png";

function Home() {
    return (
        <div className='home'>
            <div className='home__header'>
                <Header />
            </div>
            <div className='home__body'>
                <div className='metatertextimage' />
                <h1>I make games, make things and play games!</h1>
                <div className='gitHub'>
                    <h2>GitHub</h2>
                    <a href='https://github.com/Metater'>
                        <img src={GitHubPic} className="gitHubLink" alt="GitHubPic"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;