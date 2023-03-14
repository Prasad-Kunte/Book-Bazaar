import { useEffect } from "react";
import "./ProductPage.css";
function ProductPage() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  
  
  }, []);
  
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div style={{ height: "200px", width: "50%" }}></div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-3">
              {/* Filter */}
              <form className="shop__filter">
                {/* Price */}
                <h3 className="headline">
                  <span>Price</span>
                </h3>
                <div className="radio">
                  <input
                    type="radio"
                    name="shop-filter__price"
                    id="shop-filter-price_1"
                    defaultValue
                    defaultChecked
                  />
                  <label htmlFor="shop-filter-price_1">Under &#8377; 250</label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="shop-filter__price"
                    id="shop-filter-price_2"
                    defaultValue
                  />
                  <label htmlFor="shop-filter-price_2">
                    &#8377; 250 to &#8377; 500
                  </label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="shop-filter__price"
                    id="shop-filter-price_3"
                    defaultValue
                  />
                  <label htmlFor="shop-filter-price_3">
                    &#8377; 500 to &#8377; 1000
                  </label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="shop-filter__price"
                    id="shop-filter-price_4"
                    defaultValue="specify"
                  />
                  <label htmlFor="shop-filter-price_4">Other (specify)</label>
                  <div className="form-group shop-filter__price">
                    <div className="row">
                      <div className="col-xs-4">
                        <label
                          htmlFor="shop-filter-price_from"
                          className="sr-only"
                        />
                        <input
                          id="shop-filter-price_from"
                          type="number"
                          min={0}
                          className="form-control"
                          placeholder="From"
                        />
                      </div>
                      <div className="col-xs-4">
                        <label
                          htmlFor="shop-filter-price_to"
                          className="sr-only"
                        />
                        <input
                          id="shop-filter-price_to"
                          type="number"
                          min={0}
                          className="form-control"
                          placeholder="To"
                        />
                      </div>
                      <div className="col-xs-4">
                        <button
                          type="submit"
                          className="btn btn-block btn-success"
                        >
                          Go
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ height: "20px", width: "50%" }}></div>
                {/* Checkboxes */}
                <h3 className="headline">
                  <span>Product Category</span>
                </h3>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    defaultValue
                    id="shop-filter-checkbox_1"
                    defaultChecked
                  />
                  <label htmlFor="shop-filter-checkbox_1">Fiction</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    defaultValue
                    id="shop-filter-checkbox_2"
                  />
                  <label htmlFor="shop-filter-checkbox_2">Novel</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    defaultValue
                    id="shop-filter-checkbox_3"
                  />
                  <label htmlFor="shop-filter-checkbox_3">Narrative</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    defaultValue
                    id="shop-filter-checkbox_4"
                  />
                  <label htmlFor="shop-filter-checkbox_4">
                    Science Fiction
                  </label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    defaultValue
                    id="shop-filter-checkbox_5"
                  />
                  <label htmlFor="shop-filter-checkbox_5">Mystry</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    defaultValue
                    id="shop-filter-checkbox_6"
                  />
                  <label htmlFor="shop-filter-checkbox_6">Non-Fiction</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    defaultValue
                    id="shop-filter-checkbox_7"
                  />
                  <label htmlFor="shop-filter-checkbox_7">Literacy</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    defaultValue
                    id="shop-filter-checkbox_8"
                  />
                  <label htmlFor="shop-filter-checkbox_8">Historical</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    defaultValue
                    id="shop-filter-checkbox_9"
                  />
                  <label htmlFor="shop-filter-checkbox_9">Thriller</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    defaultValue
                    id="shop-filter-checkbox_10"
                  />
                  <label htmlFor="shop-filter-checkbox_10">Romance</label>
                </div>
                <div style={{ height: "20px", width: "50%" }}></div>
                {/* Radios */}
                <h3 className="headline">
                  <span>Language</span>
                </h3>
                <div className="radio">
                  <input
                    type="radio"
                    name="shop-filter__radio"
                    id="shop-filter-radio_1"
                    defaultValue
                    defaultChecked
                  />
                  <label htmlFor="shop-filter-radio_1">English</label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="shop-filter__radio"
                    id="shop-filter-radio_2"
                    defaultValue
                  />
                  <label htmlFor="shop-filter-radio_2">Hindi</label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="shop-filter__radio"
                    id="shop-filter-radio_3"
                    defaultValue
                  />
                  <label htmlFor="shop-filter-radio_3">Marathi</label>
                </div>
                <div style={{ height: "20px", width: "50%" }}></div>

                <h3 className="headline">
                  <span>Publisher</span>
                </h3>
                <div className="radio">
                  <input
                    type="radio"
                    name="shop-filter1__radio"
                    id="shop-filter1-radio_1"
                    defaultValue
                    defaultChecked
                  />
                  <label htmlFor="shop-filter1-radio_1">Publisher 1</label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="shop-filter1__radio"
                    id="shop-filter1-radio_2"
                    defaultValue
                  />
                  <label htmlFor="shop-filter1-radio_2">Publisher 2</label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="shop-filter1__radio"
                    id="shop-filter1-radio_3"
                    defaultValue
                  />
                  <label htmlFor="shop-filter1-radio_3">Publisher 3</label>
                </div>
                <div style={{ height: "20px", width: "50%" }}></div>

                <h3 className="headline">
                  <span>Author</span>
                </h3>
                <div className="radio">
                  <input
                    type="radio"
                    name="shop-filter2__radio"
                    id="shop-filter2-radio_1"
                    defaultValue
                    defaultChecked
                  />
                  <label htmlFor="shop-filter2-radio_1">Author 1</label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="shop-filter2__radio"
                    id="shop-filter2-radio_2"
                    defaultValue
                  />
                  <label htmlFor="shop-filter2-radio_2">Author 2</label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="shop-filter2__radio"
                    id="shop-filter2-radio_3"
                    defaultValue
                  />
                  <label htmlFor="shop-filter2-radio_3">Author 3</label>
                </div>
              </form>
            </div>
            <div className="col-sm-8 col-md-9">
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
      </div>
    </>
  );
}
export default ProductPage;
