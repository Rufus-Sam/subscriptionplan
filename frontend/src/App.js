import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'


const App = ()=> {
  return (
    <Router>
      <Route path='/login' component={LoginScreen} exact/>
      <Route path='/' component={HomeScreen} exact />
    </Router>
  );
}

export default App;
