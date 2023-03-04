

import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./ProductPage";


import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Homecontent from './Homecontent';
import Genre from './Genre';
import BookDetails from './BookDetails';
import RentHomePage from "./RentHomePage";




function App() {
  
  return (
    <><>

      <BrowserRouter>
        <Navbar></Navbar>
       {/* <RentHomePage/> */}

        <Routes>
          <Route path="/" element={<Homecontent/> }></Route>
          <Route
            path="/ProductPage"
            element={<ProductPage></ProductPage>}
          ></Route>
          <Route
            path="/Genre"
            element={<Genre></Genre>}
          ></Route>
          <Route
            path="/Details"
            element={<BookDetails/>}
          ></Route>
        </Routes>
        <Footer></Footer>
        
      </BrowserRouter>
    </>

   
  
   </>
   

  );
}

export default App;
