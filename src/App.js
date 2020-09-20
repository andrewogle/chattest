import React, { useState, useEffect } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { auth } from './services/firebase';

const PrivateRoute = ({component: Component, authenticated, ...rest})=> <Route
  {...rest}
  render={(props)=>authenticated === true ? <Component{...props}
/> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />} />

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/chat' />}
    />
  )
}

function App() {

  const [loading, setLoading] = useState(true)
  const [authenticated, setAuth] = useState(false)

  useEffect(auth().onAuthStateChanged((user)=>{
    if(user){
      setLoading(false)
      setAuth(true)
    }else{
      setAuth(false)
      setLoading(false)
    }
  }), [])

  return loading === true ? <h2>LOADING...</h2> : (   <Router>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <PrivateRoute path="/chat" authen = {authenticated} component={Chat}></PrivateRoute>
      <PublicRoute path="/signup" authen = {authenticated} component={Signup}></PublicRoute>
      <PublicRoute path="/login" authen = {authenticated} component={Login}></PublicRoute>
    </Switch>
  </Router>) 
}

export default App;