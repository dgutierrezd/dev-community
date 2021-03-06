import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Private Route
import PrivateRoute from './components/tools/PrivateRoute';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser} from './actions/authActions';

import {Provider} from 'react-redux';
// Store
import store from './store';

import './css/App.css';
// Layout components
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
// Auth components
import Register from './components/auth/Register';
import Login from './components/auth/Login';
// Profiles components
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile/CreateProfile';
import EditProfile from './components/profile/EditProfile';
import AddExperience from './components/profile/AddExperience';
import AddEducation from './components/profile/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile-info/Profile';
import NotFound from './components/tools/NotFound';
import Posts from './components/posts/Posts';
import Post from './components/post-info/Post';


// Check for token
if(localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and is Auth
  store.dispatch(setCurrentUser(decoded));
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={Landing} />
          <div className="container">
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profiles' component={Profiles} />     
            
            <Switch>
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path='/create/profile' component={CreateProfile} />
            </Switch>
            <Switch>
              <PrivateRoute exact path='/edit/profile' component={EditProfile} />
            </Switch>
            <Switch>
              <PrivateRoute exact path='/experience/new' component={AddExperience} />
            </Switch>
            <Switch>
              <PrivateRoute exact path='/education/new' component={AddEducation} />
            </Switch>
            <Switch>
              <PrivateRoute exact path='/feed' component={Posts} />
            </Switch>
            <Switch>
              <PrivateRoute exact path='/posts/:id' component={Post} />
            </Switch>

            <Route exact path='/profile/:handle' component={Profile} />  
            {/* <Route exact path='/not-found' component={NotFound} /> */}
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
