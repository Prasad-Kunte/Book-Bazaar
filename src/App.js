

import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./Components/ProductPage";


import './App.css';
import Navbar from './Components/Navbar';
import './sitelocaton';
import Footer from './Components/Footer';
import Homecontent from './Components/Homecontent';
import Genre from './Components/Genre';
import BookDetails from './Components/BookDetails';
import RentHomePage from "./Components/RentHomePage";
import RentContent from "./Components/RentContent";
import Checkout from "./Components/Checkout";
import {setGlobalState , useGlobalState} from "./sitelocaton";


function App() {

  
  window.onload = (event) => {
   setGlobalState("sLocation",location);
  };
  const [location]=useGlobalState("sLocation");
  if(location==="rent")
  {
    return(<>
    <BrowserRouter>
    
       <RentHomePage/>
    <Routes>
      <Route path="/" element={<RentContent></RentContent> }></Route>
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
      <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter></>);
  }
  else if(location==="newbook"){
  return (
    <><>

      <BrowserRouter>
        <Navbar></Navbar>
        

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
          <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
        </Routes>
        <Footer></Footer>
        
      </BrowserRouter>
    </>

   
  
   </>
   

  );
}
}

export default App;
