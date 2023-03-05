import upi from "./photos/upi-icon.svg"
import rupay from "./photos/rupay-logo-icon.svg";
  function Cart() {
    return (

      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - 2 items</h5>
                </div>
                <div className="card-body">
                  {/* Single item */}
                  <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      {/* Image */}
                      <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src="./green-book-icon-png-21.png" className="w-100" alt="Blue Jeans Jacket" />
                        <a href="#!">
                          <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                        </a>
                      </div>
                      {/* Image */}
                    </div>
                    <div className="col-lg-5 mb-4 mb-lg-0">
                      {/* Data */}
                      <p><strong>The Monk who sold his Ferrari</strong></p>
                      <p>Author Name</p>
                      <p>Seller Info or Book Type - Peper Pack or Hard Cover</p>
                      <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
                        <i className="fas fa-trash" />
                      </button>
                      <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip" title="Move to the wish list">
                        <i className="fas fa-heart" />
                      </button>
                      {/* Data */}
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      {/* Quantity */}
                      <div className="d-flex mb-4" style={{maxWidth: '300px'}}>
                        <button className="btn btn-primary px-3 me-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                          <i className="fas fa-minus" />
                        </button>
                        <div className="form-outline">
                          <input id="form1" min={0} name="quantity" defaultValue={1} type="number" className="form-control" />
                          <label className="form-label" htmlFor="form1">Quantity</label>
                        </div>
                        <button className="btn btn-primary px-3 ms-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                          <i className="fas fa-plus" />
                        </button>
                      </div>
                      {/* Quantity */}
                      {/* Price */}
                      <p className="text-start text-md-center">
                        <strong>Rs.299</strong>
                      </p>
                      {/* Price */}
                    </div>
                  </div>
                  {/* Single item */}
                  <hr className="my-4" />
                  {/* Single item */}
                  <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      {/* Image */}
                      <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src="./green-book-icon-png-21.png" className="w-100" />
                        <a href="#!">
                          <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                        </a>
                      </div>
                      {/* Image */}
                    </div>
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      {/* Data */}
                      <p><strong>The Psychology of Money</strong></p>
                      <p>Morgan Housel </p>
                      <p>Seller Info or Book Type - Peper Pack or Hard Cover</p>
                      <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
                        <i className="fas fa-trash" />
                      </button>
                      <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip" title="Move to the wish list">
                        <i className="fas fa-heart" />
                      </button>
                      {/* Data */}
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      {/* Quantity */}
                      <div className="d-flex mb-4" style={{maxWidth: '300px'}}>
                        <button className="btn btn-primary px-3 me-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                          <i className="fas fa-minus" />
                        </button>
                        <div className="form-outline">
                          <input id="form1" min={0} name="quantity" defaultValue={1} type="number" className="form-control" />
                          <label className="form-label" htmlFor="form1">Quantity</label>
                        </div>
                        <button className="btn btn-primary px-3 ms-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                          <i className="fas fa-plus" />
                        </button>
                      </div>
                      {/* Quantity */}
                      {/* Price */}
                      <p className="text-start text-md-center">
                        <strong>Rs.199</strong>
                      </p>
                      {/* Price */}
                    </div>
                  </div>
                  {/* Single item */}
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p><strong>Select Delivery Address</strong></p>
                  <div className="a-row address-row list-address-selected">
                    <span className="a-declarative" data-action="select-address-in-list" data-select-address-in-list="{}">
                      <div data-a-input-name="submissionURL" className="a-radio"><label><input type="radio" name="submissionURL" defaultValue="/gp/buy/addressselect/handlers/continue.html/ref=chk_addr_select_1_mru?ie=UTF8&action=select-shipping&addressID=N7QHADIJGPSW62KBTNS4G13WOXSBNOMRXVAVXRMONBSXOWAPXTQ2EYA2OX3BUJM2&enableDeliveryPreferences=1&fromAnywhere=0&numberOfDistinctItems=1&purchaseId=404-2613912-0668312&requestToken=" defaultChecked /><i className="a-icon a-icon-radio" /><span className="a-label a-radio-label">
                            <span className="a-text-bold">
                              <span className="break-word">sachin bondre</span>
                            </span>
                            <span className="break-word">Flat 701, Block No12, B Wing, Mansarovar Complex, Sec-34, Plot No 1 To 26, 34,  Manas Complex Rd, Kamothe, Panvel NAVI MUMBAI, MAHARASHTRA, 410209, India, Phone number: 9561397820</span>
                            <span className="address-edit-link">
                              <span className="a-declarative" data-action="trigger-modal-dialog" data-trigger-modal-dialog="{}">
                                <a data-testid aria-label="Edit address 
            
            sachin bondre, Flat 701, Block No12, B Wing, Mansarovar Complex, Sec-34, Plot No 1 To 26, 34,  Manas Complex Rd, Kamothe, Panvel NAVI MUMBAI, MAHARASHTRA, 410209 India
            
            " className="a-link-normal" href="/gp/buy/addressselect/handlers/popover/edit.html/ref=chk_addr_edit_pri_1?ie=UTF8&action=edit&addressID=N7QHADIJGPSW62KBTNS4G13WOXSBNOMRXVAVXRMONBSXOWAPXTQ2EYA2OX3BUJM2&enableDeliveryPreferences=1&fromAnywhere=0&isDefault=1&numberOfDistinctItems=1&purchaseId=404-2613912-0668312&requestToken=&skipHeader=0">Edit address</a>
                                <span className="a-declarative" data-action="a-modal" data-a-modal="{&quot;popoverLabel&quot;:&quot;Update your shipping address&quot;,&quot;name&quot;:&quot;edit-address&quot;,&quot;url&quot;:&quot;/gp/buy/addressselect/handlers/popover/edit.html/ref=chk_addr_edit_pri_1?ie=UTF8&action=edit&addressID=N7QHADIJGPSW62KBTNS4G13WOXSBNOMRXVAVXRMONBSXOWAPXTQ2EYA2OX3BUJM2&enableDeliveryPreferences=1&fromAnywhere=0&isDefault=1&numberOfDistinctItems=1&purchaseId=404-2613912-0668312&requestToken=&skipHeader=0&cachebuster=1678014532&quot;,&quot;header&quot;:&quot;Update your shipping address&quot;}" />
                              </span>
                            </span>
                            |
                            <span className="a-declarative" data-action="a-modal" data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-modal" data-a-modal="{&quot;name&quot;:&quot;cdpViewId-1678014529955-N7QHADIJGPSW62KBTNS4G13WOXSBNOMRXVAVXRMONBSXOWAPXTQ2EYA2OX3BUJM2&quot;,&quot;header&quot;:&quot;Add delivery instructions&quot;,&quot;cache&quot;:&quot;false&quot;,&quot;popoverLabel&quot;:&quot;Edit delivery instructions&quot;,&quot;url&quot;:&quot;/ma/deliveryProfile?addressId=N7QHADIJGPSW62KBTNS4G13WOXSBNOMRXVAVXRMONBSXOWAPXTQ2EYA2OX3BUJM2&cdpViewId=cdpViewId-1678014529955-N7QHADIJGPSW62KBTNS4G13WOXSBNOMRXVAVXRMONBSXOWAPXTQ2EYA2OX3BUJM2&ingressPointType=TSPCEP&popoverType=a-modal&quot;}">
                              <a className="a-link-normal" href="#">
                                Add New Address
                              </a>
                            </span>
                          </span></label></div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p><strong>Expected shipping delivery</strong></p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p><strong>We accept</strong></p>
                  <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                  <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
                  <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                  <img className="me-2" width="45px" src={upi} alt="Rupay acceptance mark" />
                  <img className="me-2" width="45px" src={rupay} alt="UPI Payment acceptance mark" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>Rs.498.00</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping Cost
                      <span>Rs.40.00</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including Taxes)</p>
                        </strong>
                      </div>
                      <span><strong>Rs.538.00</strong></span>
                    </li>
                  </ul>
                  <button type="button" className="btn btn-primary btn-lg btn-block">
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default Cart;