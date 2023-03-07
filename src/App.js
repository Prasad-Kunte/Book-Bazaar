import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homecontent from "./Components/Homecontent";
import ProductPage from "./Components/ProductPage";
import Genre from "./Components/Genre";
import BookDetails from "./Components/BookDetails";
import Checkout from "./Components/Checkout";
import ContactUs from "./ContactUs";
import About from "./About";
import Footer from "./Components/Footer";

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
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
            <Route path="/ContactUs" element={<ContactUs></ContactUs>}></Route>
            <Route path="/About" element={<About></About>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
