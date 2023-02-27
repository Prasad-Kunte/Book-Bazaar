

function Homecontent()
{
    return(<>
 <>
  {/* Carousel wrapper */}
  <div>
  <div
    id="carouselMaterialStyle"
    className="carousel slide carousel-fade"
    data-mdb-ride="carousel"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner rounded-5 shadow-4-strong">
      <div className="carousel-item active">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
          className="d-block w-100"
          style={{ height: "60%" }}
          alt="Sunset Over the City"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
          className="d-block w-100"
          style={{ height: "60%" }}
          alt="Canyon at Nigh"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
          className="d-block w-100"
          style={{ height: "60%" }}
          alt="Cliff Above a Stormy Sea"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-mdb-target="#carouselMaterialStyle"
      data-mdb-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-mdb-target="#carouselMaterialStyle"
      data-mdb-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  {/* Carousel wrapper */}
</>
s


    <hr class="hr hr-blurry" />
    <div className="m-2 d-flex justify-content-between">
      <h3>HORROR</h3>
      <button className="card-link btn btn-primary">
      View More
    </button>
    </div>
    <div className="row m-2 ">
    <div className="col-sm-3">
    <div className="card shadow-lg p-3 mb-5 bg-white rounded " style={{ width: "18rem" }}>
  <img src='C:\Users\PRASAD KUNTE\Desktop\Book Bazaar\bookbazaar\src\it.jpg' className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">IT</h5>
    
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Stephen King</li>
    <li className="list-group-item">15 September 1986</li>
    <li className="list-group-item">Horror</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">
    
    </a>
    <button className="card-link btn btn-primary">
      Add To Cart<i className="fas fa-shopping-cart" />
    </button>
  </div>
</div>
</div>
    

    </div>
    <hr class="hr hr-blurry" />
    
  
  

      </>);
}
export default Homecontent;