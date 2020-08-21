import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/bazzar">
                    <Header />
                    <h1>Bazzar stuff</h1>
                </Route>
                <Route path="/efficaxgame">
                    <Header />
                    <h1>Efficax gamer stuff</h1>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
