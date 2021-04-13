import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Home from './pages/Home';
import Apps from './pages/apps/Apps';
import Games from './pages/games/Games';
import Utils from './pages/utils/Utils';
import Other from './pages/other/Other';

import Header from './components/Header';

import CateringCalamity from './pages/games/catering-calamity/CateringCalamity'
import TrickOrTruth from './pages/games/trick-or-truth/TrickOrTruth'
import AnArmForAHook from './pages/games/an-arm-for-a-hook/AnArmForAHook'
import OldWestTycoon from "./pages/games/old-west-tycoon/OldWestTycoon";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/games">
                    <Games />
                </Route>
                    <Route exact path="/games/efficaxgame">
                        <Header />
                        <h1>Efficax gamer stuff</h1>
                    </Route>
                    <Route exact path="/games/catering-calamity">
                        <CateringCalamity />
                    </Route>
                    <Route exact path="/games/trick-or-truth">
                        <TrickOrTruth />
                    </Route>
                    <Route exact path="/games/an-arm-for-a-hook">
                        <AnArmForAHook />
                    </Route>
                    <Route exact path="/games/old-west-tycoon">
                        <OldWestTycoon />
                    </Route>
                <Route exact path="/apps">
                    <Apps />
                </Route>
                    <Route exact path="/apps/nummus">
                        <Header />
                        <h1>An app for checking the best minion in hypixel skyblock</h1>
                    </Route>
                    <Route exact path="/apps/memini">
                        <Header />
                        <h1>An app for backing up directories on a timer</h1>
                    </Route>
                    <Route exact path="/apps/verrat">
                        <Header />
                        <h1>An app for make sure you meet goals, and keep track of streaks</h1>
                    </Route>
                <Route exact path="/utils">
                    <Utils />
                </Route>
                    <Route exact path="/utils/bazzar">
                        <Header />
                        <h1>Bazzar stuff</h1>
                    </Route>
                <Route exact path="/gameaddons">
                    <Header />
                    <h1>Game Addons</h1>
                </Route>
                    <Route exact path="/gameaddons/efficaxplugin">
                        <Header />
                        <h1>Efficax minecraft plugin</h1>
                    </Route>
                    <Route exact path="/gameaddons/efficaxbot">
                        <Header />
                        <h1>Efficax discord bot</h1>
                    </Route>
                <Route exact path="/other">
                    <Other />
                </Route>
                    <Route exact path="/other/arca">
                        <Header />
                        <h1>Programing language idea with containers, and very clear instances</h1>
                    </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
