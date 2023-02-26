import {Link} from 'react-router-dom'
import * as mdb from 'mdb-ui-kit'; 
import { Input } from 'mdb-ui-kit';

function Homecontent()
{
    return(<><div className="row m-2 mt-2">
    <div className="col-sm-3">
    <div className="card" style={{ width: "18rem" }}>
  <img src='C:\Users\PRASAD KUNTE\Desktop\Book Bazaar\bookbazaar\src\it.jpg' className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">IT</h5>
    <p className="card-text">
    It is a 1986 horror novel by American author Stephen King.
     It was his 22nd book and his 17th novel written under his own name.
      The story follows the experiences of seven children as they are terrorized by an 
      evil entity that exploits the fears of its victims to disguise itself while hunting its prey.
    </p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Stephen King</li>
    <li className="list-group-item">15 September 1986</li>
    <li className="list-group-item">Horror</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">
      Card link
    </a>
    <a href="#" className="card-link">
      Another link
    </a>
  </div>
</div>
</div>
    

    </div>
    
  
  

      </>);
}
export default Homecontent;