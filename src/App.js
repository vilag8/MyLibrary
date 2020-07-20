import React from 'react';
import './App.css';
import Nav from './components/Navbar.js'
import What from './components/What';
import Home from './components/Home';
import Book from './components/Book';
import Footer from './components/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Nav />

          <Switch> 
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={What}/>
            <Route exact path="/:id" component={Book}/>
          </Switch>

          <Footer />
      </div>
    </BrowserRouter>  
  );
}

export default App;
