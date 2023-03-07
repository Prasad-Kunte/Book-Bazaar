import axios from 'axios';
import {Link} from 'react-router-dom'
function Signup()
{
  let url="https://docs.openaq.org/india";
  const getdata=async() =>{
    var res=await axios.get(url);
    console.log(res.data);
  }
    
    return(<><section className="h-100 bg-dark">
    <form action=""><div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card card-registration my-4">
            <div className="row g-0">
              <div className="col-xl-6 d-none d-xl-block">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                  alt="Sample photo"
                  className="img-fluid"
                  style={{
                    borderTopLeftRadius: ".25rem",
                    borderBottomLeftRadius: ".25rem"
                  }}
                />
              </div>
              
              <div className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-5 text-uppercase">
                    Sign up 
                  </h3>
                  <div className="row">
                    
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1m"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example1m">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1n"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example1n">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1m1"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example1m1">
                          Email Id
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1n1"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example1n1">
                          Mobile Number
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example8"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example8">
                      Address
                    </label>
                  </div>
                  
                    
                    
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <select className="select">
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Maharashtra">Maharashtra</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-4">
                      <select className="select">
                        <option value="mumbai">mumbai</option>
                        <option value="pune">pune</option>
                        <option value="sangli">sangli</option>
                        <option value="latur">latur</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                  <label className="form-label" htmlFor="role">
                          Role
                        </label>
                      <select className="select" id="role">
                      <option value="Customer">Customer</option>
                        <option value="Seller">Seller</option> 
                      </select>
                    </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example90"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example90">
                      Pincode
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="Password"
                      id="form3Example99"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example99">
                      Password
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example97"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example97">
                      re-enter the Password
                    </label>
                  </div>
                  <div className="d-flex justify-content-end pt-3">
                    <button type="button" className="btn btn-light btn-lg">
                      Reset all
                    </button>
                    <button type="button" className="btn btn-warning btn-lg ms-2" onClick={getdata}>
                      Submit form
                    </button>
                  </div>
                </div><Link to="/Signin">login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></form>
    
  </section>
  
      </>);
}
export default Signup;