import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Router Dependencies
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Components
import AppNavbar from './components/AppNavbar'
import TopicContainer from './components/TopicContainer'
import TopicPage from './components/TopicPage'
import TopicEdit from './components/TopicEdit'
import About from './components/About'

export default function App() {
  return (
      <div>
        <Router>
          <AppNavbar/>
          <Switch>
            <Route path = "/" component = {TopicContainer} exact/>
            <Route path = "/about" component = {About}/>
            <Route path = "/Exploits" component = {TopicPage} props = {{topic: "Exploits" }}/>
          </Switch>
        </Router>
      </div>
  );
}
