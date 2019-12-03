import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import TopicContainer from './components/TopicContainer'

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <TopicContainer/>
      
    </div>
  );
}

export default App;
