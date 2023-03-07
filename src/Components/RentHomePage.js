import { Link } from 'react-router-dom';
// import logo from '../bookbazaar/public/logo.png';
import '../sitelocaton'
import {setGlobalState , useGlobalState} from "../sitelocaton";

function RentHomePage()
{
  const changeSiteLocation = () => {
    setGlobalState("sLocation","newbook");
  };
    return(
    <><div className="sticky-top">
     <nav className="navbar navbar-expand-lg navbar-light bg-light mt-0 container-fluid sticky-top">
  <div className="container-fluid">
   
    <div className="collapse navbar-collapse d-flex align-items-center justify-content-center"  >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <h2><a className="nav-link active text-primary " aria-current="page" href="#">BOOKBAZAAR</a></h2>
        </li>
      </ul>
     
    </div>
  </div>
 
</nav>
    <nav className="navbar navbar-expand-lg navbar-light mt-0 bg-light container-fluid " >
    <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                <img
                  src="/images/logo.png"
                  height={30}
                  alt="MDB Logo"
                  loading="lazy"
                />
              </Link>
  <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <Link className="nav-link" to="/">
          Home <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="myAdd">
          myAdd
        </Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" href="History">
          History
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" onClick={changeSiteLocation}>
        New Books
        </Link>
      </li>
      
    </ul>
    <form className="form-inline my-2 my-lg-0 d-flex justify-content-between">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </div>
</nav>
</div>
    </>
    );
}
export default RentHomePage;