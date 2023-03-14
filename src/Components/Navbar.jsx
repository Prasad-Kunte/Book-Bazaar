 import {Link} from 'react-router-dom'
 import * as mdb from 'mdb-ui-kit'; 
 import { Input } from 'mdb-ui-kit';
 import { ReactSession } from 'react-client-session';
 import "./Navbar.css";
import { useEffect } from 'react';

 
function Navbar(){
  

  function logout(){
    ReactSession.set("userId","");
        ReactSession.set("fname","");
        ReactSession.set("lname","");
        ReactSession.set("email","logout");
        ReactSession.set("mobno","");
        ReactSession.set("state","");
        ReactSession.set("city","");
        ReactSession.set("pincode","");
        ReactSession.set("password","");
        ReactSession.set("Address","");
        ReactSession.set("role","");
        window.location.replace("http://localhost:3000/");

  }
  const changeSiteLocation = () => {
    ReactSession.set("location","rent");
    window.location.replace("http://localhost:3000/");
  };
    return(<>
   <div className=" sticky-top  background shadow-lg "> 
        
        
        {/* Navbar */}
        <nav className='shadow-lg'>
          <div className=" d-flex align-items-center ">
  <div className="logo d-flex align-items-center ">  <Link className="navbar-brand mt-2 mt-lg-0" to="/Home">
                <img
                  src="/images/logo.png"
                  height={50}
                  alt="MDB Logo"
                  loading="lazy"
                />
              </Link>
              </div><div><form className="d-flex input-group w-auto">
        <input
          type="search"
          className="form-control "
          placeholder="search for books"
          aria-label="Search"
          style={{maxHeight: "5vh", minHeight: "5vh"}}
        />
        <Link to="ProductPage">
        <button
          className="btn btn-outline-primary"
          type="button"
          data-mdb-ripple-color="dark"
          style={{maxHeight: "5vh", minHeight: "5vh"}}
        >
          Search
        </button></Link>
      </form></div>
      </div>
  <input type="checkbox" id="click" />
  <label htmlFor="click" className="menu-btn">
    <i className="fas fa-bars" />
  </label>
  <ul>
    <li>
      
    </li>
    <li>
      <Link className="" to="/Home">
        Home
      </Link>
    </li>
    <li >
                  <Link  onClick={changeSiteLocation}>
                  old books 
                  </Link>
                </li>
                <li >
    
    <Link  to="OrdersHistory">
          Order History
        </Link>
              
    </li>
    <li>
    <div className="dropdown">
                <a
                  className="dropdown-toggle  hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                 Genre
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Novel
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="logout">
                      Narrative
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Genre fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Science fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Mystery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Non-fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Fantasy Fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Literary fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Horror fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Historical Fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Children's literature
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Thriller
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Romance novel
                    </a>
                  </li>
                  
                </ul>
              </div>
    </li>
    <li className="dropdown">
    
                <a
                  className="dropdown-toggle  hidden-arrow "
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                 Year
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Novel
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="logout">
                      Narrative
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Genre fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Science fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Mystery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Non-fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Fantasy Fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Literary fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Horror fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Historical Fiction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Children's literature
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Thriller
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                    Romance novel
                    </a>
                  </li>
                  
                </ul>
              
    </li>
    <li>{(ReactSession.get("email")!= "logout")?((ReactSession.get("role")=="Seller")?(
    <div className="dropdown ">
                <a
                  className="dropdown-toggle  hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://images-cdn.reedsy.com/discovery/post/40/featured_image/medium_ac329dc034dac928ffdad69d752e62114b594d0e.jpg"
                    className="rounded-circle"
                    height={25}
                    alt="fa-solid fa-user-large"
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <Link className="dropdown-item" to="/addBook">
                      Add Book For Sale
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ProfilePage">
                      My profile
                    </Link>
                  </li>{(ReactSession.get("role")== "Admin")?(
                  <li>
                    <Link className="dropdown-item" to="/Admin">
                      Settings
                    </Link>
                  </li>):(<></>)}
                  <li>
                    <a className="dropdown-item" onClick={logout} style={{color:"red"}}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>):(
    <div className="dropdown ">
                <a
                  className="dropdown-toggle  hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://images-cdn.reedsy.com/discovery/post/40/featured_image/medium_ac329dc034dac928ffdad69d752e62114b594d0e.jpg"
                    className="rounded-circle"
                    height={25}
                    alt="fa-solid fa-user-large"
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <Link className="dropdown-item" to="/ProfilePage">
                      My profile
                    </Link>
                  </li>{(ReactSession.get("role")== "Admin")?(
                  <li>
                    <Link className="dropdown-item" to="/Admin">
                      Settings
                    </Link>
                  </li>):(<></>)}
                  <li>
                    <a className="dropdown-item" onClick={logout} style={{color:"red"}}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>)):(<Link  to="/Signin">
                  SignIn 
                  </Link>)}
    </li>
    <li><div>
              {/* Icon */}
              <Link className="text-reset me-3" to="Cart">
                <i className="fas fa-shopping-cart" />
              </Link>
              {/* Notifications */}</div></li>
              <li>
              <div className="dropdown">
                <a
                  className="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell" />
                  <span className="badge rounded-pill badge-notification bg-danger">
                   
                  </span>
                </a></div></li>
    <li>
    <input type="checkbox" id="click" />
  <label htmlFor="click" className="menu-btn">
    <i className="fas fa-bars" />
  </label>
    </li>
  </ul>
</nav>


        
        </div>
        
      </>);
}
export default Navbar;