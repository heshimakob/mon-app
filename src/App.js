import React from 'react';
import './App.css';
import Nav from './Nav';
import Contact from './Contact';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      </switch>
    </div>
     </Router>
  );
}
const Home = () =>(
  <div>
    <h1>Page d'accueil</h1>
  </div>
)

export default App;
