

import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./Components/ProductPage";


import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Homecontent from './Components/Homecontent';
import Genre from './Components/Genre';
import BookDetails from './Components/BookDetails';
import RentHomePage from "./Components/RentHomePage";
import RentContent from "./Components/RentContent";


var location="rent"

function App() {
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
    </Routes>
    <Footer></Footer>
    </BrowserRouter></>);
  }
  else{
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
        </Routes>
        <Footer></Footer>
        
      </BrowserRouter>
    </>

   
  
   </>
   

  );
}
}

export default App;
