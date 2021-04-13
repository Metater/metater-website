import React from 'react';
import './Games.css';
import Header from '../../components/Header';
import OldWestTycoonPic from '../../images/old-west-tycoon.png'
import AnArmForAHookPic from '../../images/an-arm-for-a-hook.png'
import TrickOrTruthPic from '../../images/trick-or-truth-pic.png'
import CateringCalamityPic from '../../images/catering-calamity-pic.png'
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className='template'>
            <div className='template__header'>
                <Header />
            </div>
            <div className='template__body'>
                <h1>Here are the games I have made with Vindico and jmanholt929!</h1>
                <Link to="games/old-west-tycoon">
                    <img src={OldWestTycoonPic} className="oldWestTycoonLink" alt="OldWestTycoonPic"/>
                </Link>
                <Link to="games/an-arm-for-a-hook">
                    <img src={AnArmForAHookPic} className="anArmForAHookLink" alt="AnArmForAHookPic"/>
                </Link>
                <Link to="games/trick-or-truth">
                    <img src={TrickOrTruthPic} className="trickOrTruthLink" alt="TrickOrTruthPic"/>
                </Link>
                <Link to="games/catering-calamity">
                    <img src={CateringCalamityPic} className="cateringCalamityLink" alt="CateringCalamityPic"/>
                </Link>
            </div>
        </div>
    )
}

export default Home;