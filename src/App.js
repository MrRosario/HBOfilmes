import React from 'react';
import Home from './pages/Home'
import Movie from  './pages/Movie';
import Favorites from './pages/Favortes';
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Switch>
          <Route path="/movie/:id">
            <Movie />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
