import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Router Dependencies
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Components
import AppNavbar from './components/AppNavbar'
import TopicContainer from './components/Topic/TopicContainer'
import TopicHome from './components/Topic/TopicHome'
import About from './components/About'

//Redux Dependencies
import { Provider } from 'react-redux';
import store from './store';

function App(){
  return (
    <Provider store = {store}>
      <div>
        <Router>
          <AppNavbar/>
          <Switch>
            <Route exact path = "/" component = {TopicContainer}/>
            <Route path = "/about" component = {About}/>
            <Route path = "/News" render = {() => <TopicHome topic= "News"/>}/>
            <Route path = "/Exploits" render = {() => <TopicHome topic= "Exploits"/>}/>
            <Route path = "/Research" render = {() => <TopicHome topic= "Research"/>}/>
            <Route path = "/Opportunities" render = {() => <TopicHome topic= "Opportunities"/>}/>
      
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}
export default App;