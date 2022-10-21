// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Login from './Login'
// import { Route, Router}  from 'react-router-dom';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import NotFound from './NotFound';
// import Layout from './Layout';
import { Route,Routes} from 'react-router-dom';
// import { Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';


function App() {
  // const[isloggedin,setLoginData]=useState(false);
  return (
   <>
<Layout/>
<Routes>
  


  <Route path="/Login" element={<Login/>}/>
  <Route path="/" element={<Login/>}/>
  <Route path="/home" element={<Home/>}/>

</Routes>
  


   </>
  );
}

export default App;
