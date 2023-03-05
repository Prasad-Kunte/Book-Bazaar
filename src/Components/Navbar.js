 import {Link} from 'react-router-dom'
 import * as mdb from 'mdb-ui-kit'; 
 import { Input } from 'mdb-ui-kit';
 import logo from './logo.png';

 
function Navbar(){
    return(<>
   <div > <nav class="navbar navbar-expand-lg navbar-light bg-light mt-0 container-fluid sticky-top">
  <div class="container-fluid">
   
    <div class="collapse navbar-collapse d-flex align-items-center justify-content-center"  >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <h2><a class="nav-link active text-primary " aria-current="page" href="#">BOOKBAZAAR</a></h2>
        </li>
      </ul>
      <form class="d-flex input-group w-auto">
        <input
          type="search"
          class="form-control"
          placeholder="search for books"
          aria-label="Search"
        />
        <Link to="ProductPage">
        <button
          class="btn btn-outline-primary"
          type="button"
          data-mdb-ripple-color="dark"
        >
          Search
        </button></Link>
      </form>
    </div>
  </div>
 
</nav>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid mb-5 sticky-top">
          {/* Container wrapper */}
          <div className="container-fluid">
           
            {/* Collapsible wrapper */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* Navbar brand */}
              <a className="navbar-brand mt-2 mt-lg-0" href="#">
                <img
                  src={logo}
                  height={30}
                  alt="MDB Logo"
                  loading="lazy"
                />
              </a>
              {/* Left links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home 
                  </Link>
                </li>
                <li className="nav-item">
                <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow nav-link"
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
                <li className="nav-item">
                <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow nav-link "
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
              </div>
                </li>
              </ul>
              {/* Left links */}
            </div>
            {/* Collapsible wrapper */}
            {/* Right elements */}
            <div className="d-flex align-items-center">
              {/* Icon */}
              <a className="text-reset me-3" href="#">
                <i className="fas fa-shopping-cart" />
              </a>
              {/* Notifications */}
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
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Some news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              {/* Avatar */}
              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
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
                    <a className="dropdown-item" href="#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="logout">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Right elements */}
          </div>
          {/* Container wrapper */}
        </nav>
        
        {/* Navbar */}
        </div>
      
      </>);
}
export default Navbar;