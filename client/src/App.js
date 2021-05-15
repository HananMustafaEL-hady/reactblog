import './App.css';
import React,{Fragment,useEffect} from 'react';
import Navbar from "./components/layout/Navbar"
import Landing from "./components/layout/Landing" 
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Login from './components/auth/Login';
import Register from "./components/auth/Register";
import{loadUser}from './actions/auth';
import {Provider} from 'react-redux';
import store from './store';
import SetToken from './helper/authToken';
import AddEducation from './components/profileForm/AddEducation';
import Profiles from './components/profiles/Profiles'
import EditProfile from './components/profileForm/EditProfile';
import AddExperiences from './components/profileForm/AddExperiences';
import Createprofile from './components/profileForm/Createprofile'
import Dashboard from './components/Dashboard/Dashboard';
import  PrivateRoute from './components/Dashboard/Routing/PrivateRoute'
import Posts from './components/Post/Posts';
import Profile from './components/profile/Profile';
import Post from './components/SinglePost/Post';
import UserAuth from './components/user/UserAuth';
import UserItem from './components/user/UserItem';


if(localStorage.token){

  SetToken(localStorage.token);
}

const App=()=> {


  useEffect(()=>{

    //accessthe store =>call dispatch
    store.dispatch(loadUser());

  },[]) // [] only run once 

  return(

    <Provider store={store}>

  <Router>
<Fragment>
<Navbar/>
{/* <Landing/> */}

{/* <Route exact path="/" component={Landing}/> */}
<Route exact path="/" component={Landing}/>


<section className="container">
  <Switch>
<Route  exact path="/register" component ={Register}/>


<Route  exact path="/login" component ={Login}/>

<Route  exact path="/profiles" component ={Profiles}/>

<Route  exact path="/Profile/:id" component ={Profile}/>

<Route   path="/Posts" component ={Posts}/>


<Route  exact path="/Post/:id" component ={Post}/>

<Route exact path="/UserItem/:id" component={UserItem}/>

<PrivateRoute  exact path="/dashboard" component ={Dashboard}/>
<PrivateRoute  exact path="/create-profile" component ={Createprofile}/>
<PrivateRoute  exact path="/edit-profile" component ={EditProfile}/>
<PrivateRoute  exact path="/addExperiences" component ={AddExperiences}/>
<PrivateRoute  exact path="/addeduction" component ={AddEducation}/>

<PrivateRoute exact path='/userprofile' component ={UserAuth}/>

  </Switch>
</section>
</Fragment>
  
  </Router>

  </Provider>
  )

  
}



export default App;
