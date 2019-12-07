import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Router Dependencies
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Components
import AppNavbar from './components/AppNavbar'
import TopicContainer from './components/Topic/TopicContainer'
import TopicPage from './components/Topic/TopicHome'
import TopicEdit from './components/Post/PostEdit'
import About from './components/About'

function App(){
  return (
      <div>
        <Router>
          <AppNavbar/>
          <Switch>
            <Route path = "/" component = {TopicContainer} exact/>
            <Route path = "/about" component = {About}/>
            <Route path = "/Exploits" render = {(props) => <TopicPage {...props}/>}/>
          </Switch>
        </Router>
      </div>
  );
}
export default App;