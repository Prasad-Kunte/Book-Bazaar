import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const initialstate = {
    isSubmit: false,
    EmailId: "",
    Password: "",
  };

  const [formdata, setFormData] = useState(initialstate);
  const { EmailId, Password } = formdata;
  const [formdataErr, setFormDataErr] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setFormDataErr(null);
    setFormData({
      ...formdata,
      isSubmit: true,
    });
    setTimeout(() => {
      let error = formValidation();
      if (error) {
        setFormDataErr(error);
        setFormData({
          ...formdata,
          isSubmit: false,
        });
        return;
      } else {
        //backend api
        //handleContactDetails();
        //check with database if true then logged in
        alert("Login successfully");
        setTimeout(() => {
          //backend api
          //handleContactDetails();
          navigate("/");
          setFormData({
            ...formdata,
            isSubmit: false,
          });
          //console.log("got response at backend");
          setFormData({
            ...formdata,
            isSubmit: false,
            EmailId: "",
            Password: "",
          });
        }, 500);
      }
    }, 1000);
  };
  const reset = () => {
    setFormData({
      ...formdata,
      isSubmit: false,
      EmailId: "",
      Password: "",
    });
  };

  const onChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const formValidation = () => {
    let error = false;

    if (EmailId === "" || !/\S+@\S+\.\S+/.test(EmailId)) {
      //console.log("inside email");
      error = {
        field_id: "EmailId",
        message: "Valid Email required",
      };
      return error;
    }

    if (
      Password === "" ||
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
        Password
      )
    ) {
      error = {
        field_id: "Password",
        message:
          "Password contains atleast 8 character includes 1 Uppercase, 1 Number and 1 Special character",
      };
      return error;
    }
  };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={onSubmit}>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    name="EmailId"
                    value={EmailId}
                    onChange={onChange}
                    className="form-control form-control-lg border border-primary"
                    placeholder="Enter email id"
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                <div>
                  {formdataErr && formdataErr.field_id === "EmailId" ? (
                    <p style={{ color: "red" }}>{formdataErr.message}</p>
                  ) : null}
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    name="Password"
                    value={Password}
                    onChange={onChange}
                    className="form-control form-control-lg border border-primary"
                    placeholder="Enter password"
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                <div>
                  {formdataErr && formdataErr.field_id === "Password" ? (
                    <p style={{ color: "red" }}>{formdataErr.message}</p>
                  ) : null}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/Signup" className="link-danger">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
