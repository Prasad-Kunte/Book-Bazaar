import $ from 'jquery';
import { Link, useNavigate } from "react-router-dom";
import { ReactSession } from 'react-client-session';
import { useEffect, useState } from 'react';
import axios from "axios";

function Add()
{
  var local=null;
    const [base64Image,setBase64Image]=useState(null);
    const [storeAuther,setStoreAuther]=useState(null);
    var img1;
    const formData = new FormData();
        
    function sendData()
    {
        console.log(ReactSession.get("datatry"));
        var Book = {}
    Book["booktitle"] = $("#title").val();
    Book["auther"]={}
    Book["auther"]["autherId"] = $("#auther").val();
    Book["bookgenre"] = $("#genre").val();
    Book["booklanguage"] = $("#language").val();
    Book["bookdesc"] = $("#desc").val();
    Book["booktype"] = $("#type").val();
    Book["bookMRP"] = $("#MRP").val();
    Book["bookprice"] =$("#price").val();
    Book["booklocality"] = $("#locality").val();
    Book["user"]={};
    Book["user"]["userId"] = ReactSession.get("userId");
    Book["book_img"]=base64Image;

    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "http://localhost:8080/books",
      data: JSON.stringify(Book),
      dataType: 'json',
      cache: false,
      timeout: 600000,
      success: function (data) {

        
        

      },
      error: function (e) {
          
      }
  });
    }
    
    
    var res;
    
    useEffect(() =>{
          res= axios.get("http://localhost:8080/getallauther").then((res) =>{
            local=res.data;
            ReactSession.set("datatry",res.data);
            setStoreAuther(local);
            console.log(storeAuther);
            console.log(res.data);
            
            ;});
        
      },[])

    function changToAddAuther()
    {
      window.location.replace("http://localhost:3000/addAuther");
    }



    const autherPrint=ReactSession.get("datatry").map((item) =>
    <option value={item.id}>{item.autherName}</option>
  )




    return(<><div >
    <div className="row gutters d-flex align-item-center justify-content-center">
      
      <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
        <div className="card h-100">
          <div className="card-body">
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h6 className="mb-2 text-primary">Upload Add for Rent/Resale</h6>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter full name"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="genre">Genre</label>
                  <select
                            className="select border border-success w-100"
                            id="genre"
                          >
                            <option value="horror">horror</option>
                            <option value="comedy">Comedy</option>
                            </select>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                <label htmlFor="language">Language</label>
                  <select
                            className="select border border-success w-100"
                            id="language"
                          >
                            <option value="hindi">Hindi</option>
                            <option value="english">English</option>
                            <option value="marathi">Marathi</option>
                            </select>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="desc">Synopsys</label>
                  <input
                    type="url"
                    className="form-control"
                    id="desc"
                    placeholder="Book description"
                  />
                </div>
              </div>
            </div>
            <label className="form-label" htmlFor="customFile">
    Upload book image
  </label>
  <input type="file" className="form-control" id="customFile" accept='image/png , image/jpg' onChange={(e) => {
             
              
             const file = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                 setBase64Image(reader.result);
                 };


              }}/>
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h6 className="mt-3 mb-2 text-primary"></h6>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                <label htmlFor="Auther">Auther</label>
                
                  <select
                            className="select border border-success w-100"
                            id="Auther"
                          >
                         {autherPrint}
                            
                            
                            </select>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="MRP">MRP</label>
                  <input
                    type="number"
                    className="form-control"
                    id="MRP"
                    placeholder="Enter MRP"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    placeholder="Enter Selling Price"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="locality">Pincode</label>
                  <input
                    type="number"
                    className="form-control"
                    id="locality"
                    placeholder="Pincode"
                  />
                </div>
              </div>
            </div>
            <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="form-group">
              <label htmlFor="type">Type</label>
              <select
                            className="select border border-success w-100"
                            id="type"
                            
                          >
                            
                            <option value="resale">Resale</option>
                            <option value="rent">Rent</option>
                            </select>
                </div>
                <div className="text-right d-flex align-item-center justify-content-around">
                <button
                    type="button"
                    id="submit"
                    name="submit"
                    onClick={changToAddAuther}
                    className="btn btn-primary"
                  >
                    Add Auther
                  </button>
                  <button
                    type="button"
                    id="submit"
                    name="submit"
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    id="submit"
                    name="submit"
                    onClick={sendData}
                    className="btn btn-primary"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</>
    
    
    );
}

export default Add;