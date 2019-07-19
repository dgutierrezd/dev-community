import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
// Layout components
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
// Auth components
import Register from './components/auth/Register';
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Landing} />
        <div className="container">
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
