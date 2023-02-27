import logo from './logo.png';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Homecontent from './Homecontent';
import {Link} from 'react-router-dom'
import * as mdb from 'mdb-ui-kit'; 
import { Input } from 'mdb-ui-kit';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
   
   <Navbar/>
  
   
   <Homecontent/>
    <Footer></Footer>
   </>
   
  );
}

export default App;
