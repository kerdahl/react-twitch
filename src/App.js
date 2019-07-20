import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Games from './components/Games';
import Streams from './components/Streams';
import GameStreams from './components/GameStreams';
import Navigation from './components/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={Games} />
      <Route exact path="/top-streams" component={Streams} />
      <Route exact path="/game/:id" component={GameStreams} />
    </Router>
  );
}

export default App;
