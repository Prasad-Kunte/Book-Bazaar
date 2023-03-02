
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Homecontent from "./Homecontent";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import * as mdb from "mdb-ui-kit";
import { Input } from "mdb-ui-kit";
import ProductPage from "./ProductPage";


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

      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Homecontent></Homecontent>}></Route>
          <Route
            path="/ProductPage"
            element={<ProductPage></ProductPage>}
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>

   
   <Navbar/>
  
   
   <Homecontent/>
    <Footer></Footer>
   </>
   

  );
}

export default App;
