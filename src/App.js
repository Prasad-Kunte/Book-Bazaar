
import logo from "./logo.svg";
import "./App.css"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import * as mdb from "mdb-ui-kit";
import { Input } from "mdb-ui-kit";
import ProductPage from "./ProductPage";


import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Homecontent from './Homecontent';



function App() {
  return (
    <><>

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

   
  
   </>
   

  );
}

export default App;
