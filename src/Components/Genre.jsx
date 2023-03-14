import { useEffect } from "react";
function Genre()
{
  useEffect(() => {
    
    window.scrollTo(0, 0);
  
  
  }, []);
  
    return(<> <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div style={{ height: "200px", width: "50%" }}></div>
      <div>
        <div className="container">
          <div className="row">
           
          
            <div className="col-sm-12">
              {/* Filters */}
              <ul className="shop__sorting">
                <li className="">
                  <a href="#">Popular</a>
                </li>
                <li>
                  <a href="#">Newest</a>
                </li>
                <li>
                  <a href="#">Bestselling</a>
                </li>
                <li>
                  <a href="#">Price (low)</a>
                </li>
                <li>
                  <a href="#">Price (high)</a>
                </li>
              </ul>
              <div className="row">
                <div className="col-sm-6 col-md-4">
                  <div className="shop__thumb">
                    <a href="#">
                      <div className="shop-thumb__img">
                        <img
                          src="/images/book.png"
                          className="img-responsive"
                          height={"250px"}
                          alt="..."
                        />
                      </div>
                      <h5 className="shop-thumb__title">Product Title</h5>
                      <div className="shop-thumb__price">
                        <span className="shop-thumb-price_old">
                          &#8377; 80.99
                        </span>
                        &nbsp;
                        <span className="shop-thumb-price_new">
                          &#8377; 59.99
                        </span>
                      </div>
                      <button
                        className="btn btn-success"
                        style={{ fontSize: "14px" }}
                      >
                        Add to Cart <i className="fa fa-shopping-cart" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="shop__thumb">
                    <a href="#">
                      <div className="shop-thumb__img">
                        <img
                          src="/images/book.png"
                          className="img-responsive"
                          height={"250px"}
                          alt="..."
                        />
                      </div>
                      <h5 className="shop-thumb__title">Product Title</h5>
                      <div className="shop-thumb__price">
                        <span className="shop-thumb-price">&#8377; 80.99</span>
                      </div>
                      <button
                        className="btn btn-success"
                        style={{ fontSize: "14px" }}
                      >
                        Add to Cart <i className="fa fa-shopping-cart" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="shop__thumb">
                    <a href="#">
                      <div className="shop-thumb__img">
                        <img
                          src="/images/book.png"
                          className="img-responsive"
                          height={"250px"}
                          alt="..."
                        />
                      </div>
                      <h5 className="shop-thumb__title">Product Title</h5>
                      <div className="shop-thumb__price">
                        <span className="shop-thumb-price_old">
                          &#8377; 80.99
                        </span>
                        &nbsp;
                        <span className="shop-thumb-price_new">
                          &#8377; 59.99
                        </span>
                      </div>
                      <button
                        className="btn btn-success"
                        style={{ fontSize: "14px" }}
                      >
                        Add to Cart <i className="fa fa-shopping-cart" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="shop__thumb">
                    <a href="#">
                      <div className="shop-thumb__img">
                        <img
                          src="/images/book.png"
                          className="img-responsive"
                          height={"250px"}
                          alt="..."
                        />
                      </div>
                      <h5 className="shop-thumb__title">Product Title</h5>
                      <div className="shop-thumb__price">
                        <span className="shop-thumb-price">&#8377; 80.99</span>
                      </div>
                      <button
                        className="btn btn-success"
                        style={{ fontSize: "14px" }}
                      >
                        Add to Cart <i className="fa fa-shopping-cart" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="shop__thumb">
                    <a href="#">
                      <div className="shop-thumb__img">
                        <img
                          src="/images/book.png"
                          className="img-responsive"
                          height={"250px"}
                          alt="..."
                        />
                      </div>
                      <h5 className="shop-thumb__title">Product Title</h5>
                      <div className="shop-thumb__price">
                        <span className="shop-thumb-price_old">
                          &#8377; 80.99
                        </span>
                        &nbsp;
                        <span className="shop-thumb-price_new">
                          &#8377; 59.99
                        </span>
                      </div>
                      <button
                        className="btn btn-success"
                        style={{ fontSize: "14px" }}
                      >
                        Add to Cart <i className="fa fa-shopping-cart" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="shop__thumb">
                    <a href="#">
                      <div className="shop-thumb__img">
                        <img
                          src="/images/book.png"
                          className="img-responsive"
                          height={"250px"}
                          alt="..."
                        />
                      </div>
                      <h5 className="shop-thumb__title">Product Title</h5>
                      <div className="shop-thumb__price">
                        <span className="shop-thumb-price">&#8377; 80.99</span>
                      </div>
                      <button
                        className="btn btn-success"
                        style={{ fontSize: "14px" }}
                      >
                        Add to Cart <i className="fa fa-shopping-cart" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="shop__thumb">
                    <a href="#">
                      <div className="shop-thumb__img">
                        <img
                          src="/images/book.png"
                          className="img-responsive"
                          height={"250px"}
                          alt="..."
                        />
                      </div>
                      <h5 className="shop-thumb__title">Product Title</h5>
                      <div className="shop-thumb__price">
                        <span className="shop-thumb-price_old">
                          &#8377; 80.99
                        </span>
                        &nbsp;
                        <span className="shop-thumb-price_new">
                          &#8377; 59.99
                        </span>
                      </div>
                      <button
                        className="btn btn-success"
                        style={{ fontSize: "14px" }}
                      >
                        Add to Cart <i className="fa fa-shopping-cart" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="shop__thumb">
                    <a href="#">
                      <div className="shop-thumb__img">
                        <img
                          src="/images/book.png"
                          className="img-responsive"
                          height={"250px"}
                          alt="..."
                        />
                      </div>
                      <h5 className="shop-thumb__title">Product Title</h5>
                      <div className="shop-thumb__price">
                        <span className="shop-thumb-price">&#8377; 80.99</span>
                      </div>
                      <button
                        className="btn btn-success"
                        style={{ fontSize: "14px" }}
                      >
                        Add to Cart <i className="fa fa-shopping-cart" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="shop__thumb">
                    <a href="#">
                      <div className="shop-thumb__img">
                        <img
                          src="/images/book.png"
                          className="img-responsive"
                          height={"250px"}
                          alt="..."
                        />
                      </div>
                      <h5 className="shop-thumb__title">Product Title</h5>
                      <div className="shop-thumb__price">
                        <span className="shop-thumb-price">&#8377; 80.99</span>
                      </div>
                      <button
                        className="btn btn-success"
                        style={{ fontSize: "14px" }}
                      >
                        Add to Cart <i className="fa fa-shopping-cart" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>{" "}
              {/* / .row */}
              {/* Pagination */}
              <div className="row">
                <div className="col-sm-12 justify-content-end">
                  <ul className="pagination pull-right justify-content-end">
                    <li className="">
                      <a href="#">«</a>
                    </li>
                    &nbsp;&nbsp;&nbsp;
                    <li className="active">
                      <a href="#">
                        1 <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    &nbsp;&nbsp;&nbsp;
                    <li>
                      <a href="#">2</a>
                    </li>
                    &nbsp;&nbsp;&nbsp;
                    <li>
                      <a href="#">3</a>
                    </li>
                    &nbsp;&nbsp;&nbsp;
                    <li>
                      <a href="#">4</a>
                    </li>
                    &nbsp;&nbsp;&nbsp;
                    <li>
                      <a href="#">5</a>
                    </li>
                    &nbsp;&nbsp;&nbsp;
                    <li>
                      <a href="#">»</a>
                    </li>
                    &nbsp;&nbsp;&nbsp;
                  </ul>
                </div>
              </div>{" "}
              {/* / .row */}
            </div>{" "}
            {/* / .col-sm-8 */}
          </div>{" "}
          {/* / .row */}
        </div>
      </div></>);
}
export default Genre;