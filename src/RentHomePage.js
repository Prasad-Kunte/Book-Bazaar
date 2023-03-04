
import { Link } from 'react-router-dom';
import logo from './logo.png';
function RentHomePage()
{
    return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid " >
    <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                <img
                  src={logo}
                  height={30}
                  alt="MDB Logo"
                  loading="lazy"
                />
              </Link>
  <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
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

    </>
    );
}
export default RentHomePage;