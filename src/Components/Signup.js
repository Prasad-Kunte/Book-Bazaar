import axios from 'axios';
import {Link} from 'react-router-dom'
import $ from 'jquery';
function Signup()
{
  let url="https://docs.openaq.org/india";
  const getdata=async() =>{
    var res=await axios.get(url);
    console.log(res.data);
  }
function Register(event){
	


        
  var User = {}
  User["fname"] = $("#fname").val();
  User["lname"] = $("#lname").val();
  User["email"] = $("#email").val();
  User["mobno"] = $("#mobno").val();
  User["state"] = $("#state").val();
  User["city"] = $("#city").val();
  User["pincode"] = $("#pincode").val();
  User["password"] = $("#password").val();
  User["Address"] = $("#Address").val();
  User["role"] = $("#role").val();
       console.log(User);

       $("#bth_submit").prop("disabled", true);

       $.ajax({
           type: "POST",
           contentType: "application/json",
           url: "http://localhost:8080/userss",
           data: JSON.stringify(User),
           dataType: 'json',
           cache: false,
           timeout: 600000,
           success: function (data) {

             
             

           },
           error: function (e) {
               
           }
       });
      //  fetch("http://localhost:8080/userss", {
      //   method: 'POST',
      //   body: JSON.stringify(User),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // })
      // .then(response => response.json())
      // .then(data => console.log(data))
      // .catch(error => console.error(error));
       
       
   
 
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
                          id="fname"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="fname">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="lname"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="lname">
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
                          id="email"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="email">
                          Email Id
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="mobno"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="mobno">
                          Mobile Number
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="Address"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="Address">
                      Address
                    </label>
                  </div>
                  
                    
                    
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <select className="select" id="state">
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Maharashtra">Maharashtra</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-4">
                      <select className="select" id="city">
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
                      id="pincode"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example90">
                      Pincode
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="Password"
                      id="password"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="password">
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
                    <button type="button" id="bth_submit" className="btn btn-warning btn-lg ms-2" onClick={Register}>
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