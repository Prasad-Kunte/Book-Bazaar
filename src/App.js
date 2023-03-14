import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./Components/ProductPage";

import "./App.css";
import Navbar from "./Components/Navbar";
import "./sitelocaton";
import Footer from "./Components/Footer";
import Homecontent from "./Components/Homecontent";
import Genre from "./Components/Genre";
import BookDetails from "./Components/BookDetails";
import RentHomePage from "./Components/RentHomePage";
import RentContent from "./Components/RentContent";
import Checkout from "./Components/Checkout";
import Update from "./Components/Update";
import ProfilePage from "./Components/ProfilePage";
import { setGlobalState, useGlobalState } from "./sitelocaton";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Chat from "./Components/Chat";
import Invoice from "./Components/Invoice";
import Cart from "./Components/Cart";

function App() {
  window.onload = (event) => {
    setGlobalState("sLocation", location);
  };
  const [location] = useGlobalState("sLocation");
  if (location === "rent") {
    return (
      <>
        <BrowserRouter>
          <RentHomePage />
          <Routes>
            <Route path="/" element={<RentContent></RentContent>}></Route>
            <Route
              path="/ProductPage"
              element={<ProductPage></ProductPage>}
            ></Route>
            <Route path="/Genre" element={<Genre></Genre>}></Route>
            <Route path="/ProfilePage" element={<ProfilePage />}></Route>
            <Route path="/Aboutus" element={<About />}></Route>
            <Route path="/ContactUs" element={<ContactUs />}></Route>

            <Route path="/Signin" element={<Login />}></Route>

            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Details" element={<BookDetails />}></Route>
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
            <Route path="/Chat" element={<Chat></Chat>}></Route>
            <Route path="/Invoice" element={<Invoice></Invoice>}></Route>
            <Route path="/Cart" element={<Cart></Cart>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </>
    );
  }
  if (location === "rent") {
    return <></>;
  } else if (location === "newbook") {
    return (
      <>
        <>
          <BrowserRouter>
            <Navbar></Navbar>
            {/* <LoginSignUp/> */}
            <Routes>
              <Route path="/" element={<Homecontent />}></Route>
              <Route
                path="/ProductPage"
                element={<ProductPage></ProductPage>}
              ></Route>
              <Route path="/ProfilePage" element={<ProfilePage />}></Route>

              <Route path="/Update" element={<Update />}></Route>
              <Route path="/Genre" element={<Genre></Genre>}></Route>
              <Route path="/Aboutus" element={<About />}></Route>
              <Route path="/ContactUs" element={<ContactUs />}></Route>
              <Route path="/Signup" element={<Signup />}></Route>

              <Route path="/Signin" element={<Login />}></Route>
              <Route path="/Details" element={<BookDetails />}></Route>
              <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
              <Route path="/Chat" element={<Chat></Chat>}></Route>
              <Route path="/Invoice" element={<Invoice></Invoice>}></Route>
              <Route path="/Cart" element={<Cart />}></Route>
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
        </>
      </>
    );
  }
}
export default App;
