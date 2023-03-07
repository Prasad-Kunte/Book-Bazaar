import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homecontent from "./Components/Homecontent";
import ProductPage from "./Components/ProductPage";
import Genre from "./Components/Genre";
import BookDetails from "./Components/BookDetails";
import Checkout from "./Components/Checkout";
import About from "./About";
import Footer from "./Components/Footer";
import Update from "./Components/Update";
import ProfilePage from "./Components/ProfilePage";
import {setGlobalState , useGlobalState} from "./sitelocaton";
import ContactUs from "./Components/ContactUs";
import Signup from "./Components/Signup";

export function App() {
  window.onload = (event) => {
   setGlobalState("sLocation",location);
  };
  const [location]=useGlobalState("sLocation");
  if(location==="rent")
  {
    return(
    <>
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
      <Route path="/ProfilePage" element={<ProfilePage />}></Route>
      <Route path="/Aboutus" element={<About/>}></Route>
      <Route path="/ContactUs" element={<ContactUs/>}></Route>
      <Route
        path="/Details"
        element={<BookDetails/>}
      ></Route>
      <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>);
  }
  if(location==="rent")
  {
    return(<></>);
   
  }
  else if(location==="newbook"){

  return (
    <>
      
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Homecontent />}></Route>
            <Route
              path="/ProductPage"
              element={<ProductPage></ProductPage>}
            ></Route>
            <Route path="/Genre" element={<Genre></Genre>}></Route>
            <Route path="/Details" element={<BookDetails />}></Route>
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
            <Route path="/ContactUs" element={<ContactUs></ContactUs>}></Route>
            <Route path="/About" element={<About></About>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      

      <BrowserRouter>
        <Navbar></Navbar>
        

        <Routes>
          <Route path="/" element={<Homecontent/> }></Route>
          <Route
            path="/ProductPage"
            element={<ProductPage></ProductPage>}
          ></Route>
          <Route path="/ProfilePage" element={<ProfilePage />}></Route>
          
            <Route path="/Update" element={<Update/>}></Route>
          <Route
            path="/Genre"
            element={<Genre></Genre>}
          ></Route>
          <Route path="/Aboutus" element={<About/>}></Route>
          <Route path="/ContactUs" element={<ContactUs/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route
            path="/Details"
            element={<BookDetails/>}
          ></Route>
          <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
        </Routes>
        <Footer></Footer>
        
      </BrowserRouter>
    </>
  );
}