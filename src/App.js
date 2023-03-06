import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import * as mdb from "mdb-ui-kit";
import { Input } from "mdb-ui-kit";
import ProductPage from "./ProductPage";

import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Homecontent from "./Homecontent";
import Genre from "./Genre";
import BookDetails from "./BookDetails";

import Checkout from "./Checkout";
import ProfilePage from "./ProfilePage";
import Update from "./Update";

function App() {
  return (
    <>
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
            <Route path="/ProfilePage" element={<ProfilePage />}></Route>
            <Route path="/Update" element={<Update/>}></Route>
           
           
            
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
