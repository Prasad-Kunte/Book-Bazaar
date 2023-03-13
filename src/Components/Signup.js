import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Signup() {
  const initialstate = {
    isSubmit: false,
    FirstName: "",
    LastName: "",
    EmailId: "",
    MobileNo: "",
    Address: "",
    Pincode: "",
    Password: "",
    ConfirmPassword: "",
  };

  const [formdata, setFormData] = useState(initialstate);
  const {
    FirstName,
    LastName,
    EmailId,
    MobileNo,
    Address,
    Pincode,
    Password,
    ConfirmPassword,
  } = formdata;
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
        alert("Registered successfully. Kindly Login");
        setTimeout(() => {
          //backend api
          //handleContactDetails();
          navigate("/Signin");
          setFormData({
            ...formdata,
            isSubmit: false,
          });
          console.log("got response at backend");
          setFormData({
            ...formdata,
            isSubmit: false,
            FirstName: "",
            LastName: "",
            EmailId: "",
            MobileNo: "",
            Address: "",
            Pincode: "",
            Password: "",
            ConfirmPassword: "",
          });
        }, 500);
      }
    }, 1000);
  };
  const reset = () => {
    setFormData({
      ...formdata,
      isSubmit: false,
      FirstName: "",
      LastName: "",
      EmailId: "",
      MobileNo: "",
      Address: "",
      Pincode: "",
      Password: "",
      ConfirmPassword: "",
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
    if (FirstName === "" || !/^[A-Za-z]{3,}$/.test(FirstName)) {
      //console.log("inside fullname");
      error = {
        field_id: "FirstName",
        message: "Name is required",
      };
      return error;
    }

    if (LastName === "" || !/^[A-Za-z]{3,}$/.test(LastName)) {
      //console.log("inside fullname");
      error = {
        field_id: "LastName",
        message: "Last Name is required",
      };
      return error;
    }

    if (EmailId === "" || !/\S+@\S+\.\S+/.test(EmailId)) {
      //console.log("inside email");
      error = {
        field_id: "EmailId",
        message: "Valid Email required",
      };
      return error;
    }

    if (MobileNo === "" || !/^\+?([6-9]{1})\)?([0-9]{9})$/.test(MobileNo)) {
      //console.log("inside phone");
      error = {
        field_id: "MobileNo",
        message: "Valid Phone no. is required",
      };
      return error;
    }
    if (Address === "" || Address.length < 10 || !Address.includes(" ")) {
      error = {
        field_id: "Address",
        message: "Valid Address is required",
      };
      return error;
    }

    if (Pincode === "" || Pincode.length < 6 || !/(^\d{6}$)/.test(Pincode)) {
      error = {
        field_id: "Pincode",
        message: "Provide valid Pincode",
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
    if (ConfirmPassword === "" || !(Password === ConfirmPassword)) {
      error = {
        field_id: "ConfirmPassword",
        message: "Password not match",
      };
      return error;
    }
  };

  // let url = "https://docs.openaq.org/india";
  // const getdata = async () => {
  //   var res = await axios.get(url);
  //   console.log(res.data);
  // };

  return (
    <>
      <section className="h-100 bg-dark">
        <form action="" onSubmit={onSubmit}>
          <div className="container py-5 h-100">
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
                          borderBottomLeftRadius: ".25rem",
                        }}
                      />
                    </div>

                    <div className="col-xl-6">
                      <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase text-center">
                          Register
                        </h3>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1m"
                                name="FirstName"
                                value={FirstName}
                                onChange={onChange}
                                className="form-control form-control-lg border border-success"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1m"
                              >
                                First name
                              </label>
                            </div>
                            <div>
                              {formdataErr &&
                              formdataErr.field_id === "FirstName" ? (
                                <p style={{ color: "red" }}>
                                  {formdataErr.message}
                                </p>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1n"
                                name="LastName"
                                value={LastName}
                                onChange={onChange}
                                className="form-control form-control-lg border border-success"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1n"
                              >
                                Last Name
                              </label>
                            </div>
                            <div>
                              {formdataErr &&
                              formdataErr.field_id === "LastName" ? (
                                <p style={{ color: "red" }}>
                                  {formdataErr.message}
                                </p>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1m1"
                                name="EmailId"
                                value={EmailId}
                                onChange={onChange}
                                className="form-control form-control-lg border border-success"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1m1"
                              >
                                Email Id
                              </label>
                            </div>
                            <div>
                              {formdataErr &&
                              formdataErr.field_id === "EmailId" ? (
                                <p style={{ color: "red" }}>
                                  {formdataErr.message}
                                </p>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1n1"
                                name="MobileNo"
                                value={MobileNo}
                                onChange={onChange}
                                className="form-control form-control-lg border border-success"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example1n1"
                              >
                                Mobile Number
                              </label>
                            </div>
                            <div>
                              {formdataErr &&
                              formdataErr.field_id === "MobileNo" ? (
                                <p style={{ color: "red" }}>
                                  {formdataErr.message}
                                </p>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example8"
                            name="Address"
                            value={Address}
                            onChange={onChange}
                            className="form-control form-control-lg border border-success"
                          />
                          <label className="form-label" htmlFor="form3Example8">
                            Address
                          </label>
                        </div>
                        <div>
                          {formdataErr && formdataErr.field_id === "Address" ? (
                            <p style={{ color: "red" }}>
                              {formdataErr.message}
                            </p>
                          ) : null}
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <lable>State</lable>

                            <select className="select border border-success w-100">
                              <option value="Andhra Pradesh">
                                Andhra Pradesh
                              </option>
                              <option value="Uttar Pradesh">
                                Uttar Pradesh
                              </option>
                              <option value="Punjab">Punjab</option>
                              <option value="Bihar">Bihar</option>
                              <option value="Tamil Nadu">Tamil Nadu</option>
                              <option value="Maharashtra">Maharashtra</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-4">
                            <lable>City</lable>
                            <select className="select border border-success w-100">
                              <option value="mumbai">mumbai</option>
                              <option value="pune">pune</option>
                              <option value="sangli">sangli</option>
                              <option value="latur">latur</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <label
                            className="form-label text-dark"
                            htmlFor="role"
                          >
                            Role
                          </label>
                          <select
                            className="select border border-success w-100"
                            id="role"
                          >
                            <option value="Customer">Customer</option>
                            <option value="Seller">Seller</option>
                          </select>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example90"
                            name="Pincode"
                            value={Pincode}
                            onChange={onChange}
                            className="form-control form-control-lg border border-success"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example90"
                          >
                            Pincode
                          </label>
                        </div>
                        <div>
                          {formdataErr && formdataErr.field_id === "Pincode" ? (
                            <p style={{ color: "red" }}>
                              {formdataErr.message}
                            </p>
                          ) : null}
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="Password"
                            id="form3Example99"
                            name="Password"
                            value={Password}
                            onChange={onChange}
                            className="form-control form-control-lg border border-success"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example99"
                          >
                            Password
                          </label>
                        </div>
                        <div>
                          {formdataErr &&
                          formdataErr.field_id === "Password" ? (
                            <p style={{ color: "red" }}>
                              {formdataErr.message}
                            </p>
                          ) : null}
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form3Example97"
                            name="ConfirmPassword"
                            value={ConfirmPassword}
                            onChange={onChange}
                            className="form-control form-control-lg border border-success"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example97"
                          >
                            re-enter the Password
                          </label>
                        </div>
                        <div>
                          {formdataErr &&
                          formdataErr.field_id === "ConfirmPassword" ? (
                            <p style={{ color: "red" }}>
                              {formdataErr.message}
                            </p>
                          ) : null}
                        </div>
                        <div className="d-flex justify-content-start pt-3">
                          <button
                            type="button"
                            onClick={reset}
                            className="btn btn-danger btn-lg"
                          >
                            Reset
                          </button>
                          <div className="w-50 justify-content-start"></div>
                          <button
                            type="submit"
                            className="btn btn-success btn-lg ms-2"
                            // {  onClick={getdata}}
                          >
                            Register
                          </button>
                        </div>
                      </div>
                      <div className="text-center">
                        <button className="btn btn-warning w-50">
                          <Link className="text-light" to="/Signin">
                            login
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
export default Signup;
