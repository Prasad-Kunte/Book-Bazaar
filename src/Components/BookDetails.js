import "./BookDe.css"
import {Link} from 'react-router-dom'
function BookDetails()
{
    return (<><div className="container">
    <div className="card">
      <div className="container-fliud">
        <div className="wrapper row">
          <div className="preview col-md-6">
            <div className="preview-pic tab-content">
              <div className="tab-pane active" id="pic-1">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-pchMY0IEW5RmLvyTff-2r2TeDuOm4p0iN5_s5denZ87MNesm" />
              </div>
              
            </div>
           
          </div>
          <div className="details col-md-6">
            <h3 className="product-title">Bird Box</h3>
            <div className="rating">
              <div className="stars">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              <span className="review-no">41 reviews</span>
            </div>
            <p className="product-description">
            Bird Box is a 2014 post-apocalyptic novel and the debut 
            novel by American writer and singer Josh Malerman. The book was
             first published in the United Kingdom on March 27, 2014, through
              Harper Voyager and in the United States on May 13, 2014, through 
              Ecco Press.
            </p>
            <h4 className="price">
              current price: <span>₹ 284</span>
            </h4>
            <p className="vote">
              <strong>91%</strong> of buyers enjoyed this product!{" "}
              <strong>(87 votes)</strong>
            </p>
         
           
            <div className="action">
              <button className="add-to-cart btn btn-default" type="button">
                add to cart
              </button>
              <Link to="/Checkout"><button className="add-to-cart btn btn-default" type="button">
                Buy Now
              </button></Link>
              <button className="like btn btn-default" type="button">
                <span className="fa fa-heart" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>);
}
export default BookDetails;