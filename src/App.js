
import logo from "./logo.svg";
import "./App.css"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import * as mdb from "mdb-ui-kit";
import { Input } from "mdb-ui-kit";
import ProductPage from "./ProductPage";
import AddBook from "./AddBook";


import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Homecontent from './Homecontent';
import Cart from "./Cart";
import Test from "./Test";



function App() {
  return (
    <><>

      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Homecontent></Homecontent>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          <Route path='/Test' element={<Test/>}></Route>
          <Route path='/AddBook' element={<AddBook/>}></Route>
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
