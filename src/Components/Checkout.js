

function Checkout() {
  return (
    <section className="bg-light py-2">
      <div className="container-lg">
        <div className="row">
          <div className="col-xl-8 col-lg-8 mb-4">
            {/* Checkout */}
            <div className="card shadow-0 border">
              <div className="p-4">
                <h5 className="card-title text-black mb-3">Checkout</h5>
                <hr className="text-danger " />
                <hr className="text-success " />
                <br />
                <div className="row">
                  <div className="col-6 mb-3">
                    <p className="mb-0">First name</p>
                    <div className="">
                      <input
                        type="text"
                        id="typeText"
                        placeholder="Type here"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <p className="mb-0">Last name</p>
                    <div className="">
                      <input
                        type="text"
                        id="typeText"
                        placeholder="Type here"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <p className="mb-0">Phone</p>
                    <div className="">
                      <input
                        type="tel"
                        id="typePhone"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <p className="mb-0">Email</p>
                    <div className="">
                      <input
                        type="email"
                        id="typeEmail"
                        placeholder="example@gmail.com"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>

                <hr className="my-4" />
                <h5 className="card-title mb-3">Shipping info</h5>
                <div className="row mb-3">
                  <div className="col-lg-4 mb-3">
                    {/* Default checked radio */}
                    <div className="form-check h-100 border rounded-3">
                      <div className="p-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Express delivery <br />
                          <small className="text-muted">4-5 days </small>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 mb-3">
                    {/* Default radio */}
                    <div className="form-check h-100 border rounded-3">
                      <div className="p-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault3"
                        >
                          Self pick-up <br />
                          <small className="text-muted">
                            Come to our shop{" "}
                          </small>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="text-danger " />
                <br></br>
                <div className="row">
                  <div className="col-sm-8 mb-3">
                    <p className="mb-0">Address</p>
                    <div className="">
                      <input
                        type="text"
                        id="typeText"
                        placeholder="Type here"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 mb-3">
                    <p className="mb-0">City</p>
                    <select className="form-select">
                      <option value="">Select City</option>
                      <option value="Achalpur">Achalpur</option>
                      <option value="Ahiri">Ahiri</option>
                      <option value="Ahmadnagar">Ahmadnagar</option>
                      <option value="Ahmadpur">Ahmadpur</option>
                      <option value="Airoli">Airoli</option>
                      <option value="Ajra">Ajra</option>
                      <option value="Akalkot">Akalkot</option>
                      <option value="Akola">Akola</option>
                      <option value="Akot">Akot</option>
                      <option value="Alandi">Alandi</option>
                      <option value="Alibag">Alibag</option>
                      <option value="Allapalli">Allapalli</option>
                      <option value="Amalner">Amalner</option>
                      <option value="Amarnath">Amarnath</option>
                      <option value="Ambad">Ambad</option>
                      <option value="Ambajogai">Ambajogai</option>
                      <option value="Amravati">Amravati</option>
                      <option value="Amravati Division">
                        Amravati Division
                      </option>
                      <option value="Anjangaon">Anjangaon</option>
                      <option value="Anshing">Anshing</option>
                      <option value="Arangaon">Arangaon</option>
                      <option value="Artist Village">Artist Village</option>
                      <option value="Arvi">Arvi</option>
                      <option value="Ashta">Ashta</option>
                      <option value="Ashti">Ashti</option>
                      <option value="Aurangabad">Aurangabad</option>
                      <option value="Ausa">Ausa</option>
                      <option value="Badlapur">Badlapur</option>
                      <option value="Balapur">Balapur</option>
                      <option value="Ballalpur">Ballalpur</option>
                      <option value="Baramati">Baramati</option>
                      <option value="Barsi">Barsi</option>
                      <option value="Basmat">Basmat</option>
                      <option value="Beed">Beed</option>
                      <option value="Bhandara">Bhandara</option>
                      <option value="Bhayandar">Bhayandar</option>
                      <option value="Bhigvan">Bhigvan</option>
                      <option value="Bhiwandi">Bhiwandi</option>
                      <option value="Bhor">Bhor</option>
                      <option value="Bhudgaon">Bhudgaon</option>
                      <option value="Bhum">Bhum</option>
                      <option value="Bhusaval">Bhusaval</option>
                      <option value="Bid">Bid</option>
                      <option value="Biloli">Biloli</option>
                      <option value="Boisar">Boisar</option>
                      <option value="Borivli">Borivli</option>
                      <option value="Buldana">Buldana</option>
                      <option value="Chakan">Chakan</option>
                      <option value="Chalisgaon">Chalisgaon</option>
                      <option value="Chanda">Chanda</option>
                      <option value="Chandor">Chandor</option>
                      <option value="Chandrapur">Chandrapur</option>
                      <option value="Chandur">Chandur</option>
                      <option value="Chandur Bazar">Chandur Bazar</option>
                      <option value="Chicholi">Chicholi</option>
                      <option value="Chikhli">Chikhli</option>
                      <option value="Chinchani">Chinchani</option>
                      <option value="Chiplun">Chiplun</option>
                      <option value="Chopda">Chopda</option>
                      <option value="Dabhol">Dabhol</option>
                      <option value="Dahanu">Dahanu</option>
                      <option value="Darwha">Darwha</option>
                      <option value="Daryapur">Daryapur</option>
                      <option value="Dattapur">Dattapur</option>
                      <option value="Daulatabad">Daulatabad</option>
                      <option value="Daund">Daund</option>
                      <option value="Dehu">Dehu</option>
                      <option value="Deolali">Deolali</option>
                      <option value="Deoli">Deoli</option>
                      <option value="Deulgaon Raja">Deulgaon Raja</option>
                      <option value="Dharangaon">Dharangaon</option>
                      <option value="Dharmabad">Dharmabad</option>
                      <option value="Dharur">Dharur</option>
                      <option value="Dhule">Dhule</option>
                      <option value="Dhulia">Dhulia</option>
                      <option value="Diglur">Diglur</option>
                      <option value="Digras">Digras</option>
                      <option value="Dombivli">Dombivli</option>
                      <option value="Dondaicha">Dondaicha</option>
                      <option value="Dudhani">Dudhani</option>
                      <option value="Durgapur">Durgapur</option>
                      <option value="Erandol">Erandol</option>
                      <option value="Faizpur">Faizpur</option>
                      <option value="Gadchiroli">Gadchiroli</option>
                      <option value="Gadhinglaj">Gadhinglaj</option>
                      <option value="Gangakher">Gangakher</option>
                      <option value="Gangapur">Gangapur</option>
                      <option value="Gevrai">Gevrai</option>
                      <option value="Ghatanji">Ghatanji</option>
                      <option value="Ghoti Budrukh">Ghoti Budrukh</option>
                      <option value="Ghugus">Ghugus</option>
                      <option value="Gondiya">Gondiya</option>
                      <option value="Goregaon">Goregaon</option>
                      <option value="Guhagar">Guhagar</option>
                      <option value="Hadgaon">Hadgaon</option>
                      <option value="Harnai">Harnai</option>
                      <option value="Hinganghat">Hinganghat</option>
                      <option value="Hingoli">Hingoli</option>
                      <option value="Hirapur Hamesha">Hirapur Hamesha</option>
                      <option value="Ichalkaranji">Ichalkaranji</option>
                      <option value="Igatpuri">Igatpuri</option>
                      <option value="Indapur">Indapur</option>
                      <option value="Jaisingpur">Jaisingpur</option>
                      <option value="Jalgaon">Jalgaon</option>
                      <option value="Jalgaon Jamod">Jalgaon Jamod</option>
                      <option value="Jalna">Jalna</option>
                      <option value="Jawhar">Jawhar</option>
                      <option value="Jejuri">Jejuri</option>
                      <option value="Jintur">Jintur</option>
                      <option value="Junnar">Junnar</option>
                      <option value="Kagal">Kagal</option>
                      <option value="Kalamb">Kalamb</option>
                      <option value="Kalamnuri">Kalamnuri</option>
                      <option value="Kalas">Kalas</option>
                      <option value="Kalmeshwar">Kalmeshwar</option>
                      <option value="Kalundri">Kalundri</option>
                      <option value="Kalyan">Kalyan</option>
                      <option value="Kamthi">Kamthi</option>
                      <option value="Kandri">Kandri</option>
                      <option value="Kankauli">Kankauli</option>
                      <option value="Kannad">Kannad</option>
                      <option value="Karad">Karad</option>
                      <option value="Karanja">Karanja</option>
                      <option value="Karjat">Karjat</option>
                      <option value="Karmala">Karmala</option>
                      <option value="Kati">Kati</option>
                      <option value="Katol">Katol</option>
                      <option value="Khadki">Khadki</option>
                      <option value="Khamgaon">Khamgaon</option>
                      <option value="Khapa">Khapa</option>
                      <option value="Kharakvasla">Kharakvasla</option>
                      <option value="Khed">Khed</option>
                      <option value="Khetia">Khetia</option>
                      <option value="Khopoli">Khopoli</option>
                      <option value="Khuldabad">Khuldabad</option>
                      <option value="Kinwat">Kinwat</option>
                      <option value="Kodoli">Kodoli</option>
                      <option value="Kolhapur">Kolhapur</option>
                      <option value="Kondalwadi">Kondalwadi</option>
                      <option value="Kopargaon">Kopargaon</option>
                      <option value="Koradi">Koradi</option>
                      <option value="Koregaon">Koregaon</option>
                      <option value="Koynanagar">Koynanagar</option>
                      <option value="Kudal">Kudal</option>
                      <option value="Kurandvad">Kurandvad</option>
                      <option value="Kurduvadi">Kurduvadi</option>
                      <option value="Lanja">Lanja</option>
                      <option value="Lasalgaon">Lasalgaon</option>
                      <option value="Latur">Latur</option>
                      <option value="Lohogaon">Lohogaon</option>
                      <option value="Lonar">Lonar</option>
                      <option value="Lonavla">Lonavla</option>
                      <option value="Mahabaleshwar">Mahabaleshwar</option>
                      <option value="Mahad">Mahad</option>
                      <option value="Maindargi">Maindargi</option>
                      <option value="Majalgaon">Majalgaon</option>
                      <option value="Makhjan">Makhjan</option>
                      <option value="Malegaon">Malegaon</option>
                      <option value="Malkapur">Malkapur</option>
                      <option value="Malvan">Malvan</option>
                      <option value="Manchar">Manchar</option>
                      <option value="Mangrul Pir">Mangrul Pir</option>
                      <option value="Manmad">Manmad</option>
                      <option value="Manor">Manor</option>
                      <option value="Mansar">Mansar</option>
                      <option value="Manwat">Manwat</option>
                      <option value="Matheran">Matheran</option>
                      <option value="Mehekar">Mehekar</option>
                      <option value="Mhasla">Mhasla</option>
                      <option value="Mhasvad">Mhasvad</option>
                      <option value="Mohpa">Mohpa</option>
                      <option value="Moram">Moram</option>
                      <option value="Morsi">Morsi</option>
                      <option value="Mowad">Mowad</option>
                      <option value="Mudkhed">Mudkhed</option>
                      <option value="Mukher">Mukher</option>
                      <option value="Mul">Mul</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Mumbai Suburban">Mumbai Suburban</option>
                      <option value="Murbad">Murbad</option>
                      <option value="Murgud">Murgud</option>
                      <option value="Murtajapur">Murtajapur</option>
                      <option value="Murud">Murud</option>
                      <option value="Nagothana">Nagothana</option>
                      <option value="Nagpur">Nagpur</option>
                      <option value="Nagpur Division">Nagpur Division</option>
                      <option value="Naldurg">Naldurg</option>
                      <option value="Nanded">Nanded</option>
                      <option value="Nandgaon">Nandgaon</option>
                      <option value="Nandura Buzurg">Nandura Buzurg</option>
                      <option value="Nandurbar">Nandurbar</option>
                      <option value="Nashik">Nashik</option>
                      <option value="Nashik Division">Nashik Division</option>
                      <option value="Navi Mumbai">Navi Mumbai</option>
                      <option value="Neral">Neral</option>
                      <option value="Nilanga">Nilanga</option>
                      <option value="Nipani">Nipani</option>
                      <option value="Osmanabad">Osmanabad</option>
                      <option value="Ozar">Ozar</option>
                      <option value="Pachora">Pachora</option>
                      <option value="Paithan">Paithan</option>
                      <option value="Palghar">Palghar</option>
                      <option value="Panchgani">Panchgani</option>
                      <option value="Pandharpur">Pandharpur</option>
                      <option value="Panhala">Panhala</option>
                      <option value="Panvel">Panvel</option>
                      <option value="Parbhani">Parbhani</option>
                      <option value="Parli Vaijnath">Parli Vaijnath</option>
                      <option value="Parola">Parola</option>
                      <option value="Partur">Partur</option>
                      <option value="Patan">Patan</option>
                      <option value="Pathardi">Pathardi</option>
                      <option value="Pathri">Pathri</option>
                      <option value="Patur">Patur</option>
                      <option value="Pawni">Pawni</option>
                      <option value="Pen">Pen</option>
                      <option value="Phaltan">Phaltan</option>
                      <option value="Pimpri">Pimpri</option>
                      <option value="Pipri">Pipri</option>
                      <option value="Powai">Powai</option>
                      <option value="Pulgaon">Pulgaon</option>
                      <option value="Pune">Pune</option>
                      <option value="Pune Division">Pune Division</option>
                      <option value="Purna">Purna</option>
                      <option value="Pusad">Pusad</option>
                      <option value="Rahimatpur">Rahimatpur</option>
                      <option value="Rahuri">Rahuri</option>
                      <option value="Raigarh">Raigarh</option>
                      <option value="Rajapur">Rajapur</option>
                      <option value="Rajgurunagar">Rajgurunagar</option>
                      <option value="Rajur">Rajur</option>
                      <option value="Rajura">Rajura</option>
                      <option value="Ramtek">Ramtek</option>
                      <option value="Ratnagiri">Ratnagiri</option>
                      <option value="Raver">Raver</option>
                      <option value="Revadanda">Revadanda</option>
                      <option value="Risod">Risod</option>
                      <option value="Roha">Roha</option>
                      <option value="Sangamner">Sangamner</option>
                      <option value="Sangli">Sangli</option>
                      <option value="Sangola">Sangola</option>
                      <option value="Saoner">Saoner</option>
                      <option value="Sasvad">Sasvad</option>
                      <option value="Satana">Satana</option>
                      <option value="Satara">Satara</option>
                      <option value="Satara Division">Satara Division</option>
                      <option value="Savantvadi">Savantvadi</option>
                      <option value="Savda">Savda</option>
                      <option value="Selu">Selu</option>
                      <option value="Shahada">Shahada</option>
                      <option value="Shahapur">Shahapur</option>
                      <option value="Shegaon">Shegaon</option>
                      <option value="Shiraguppi">Shiraguppi</option>
                      <option value="Shirdi">Shirdi</option>
                      <option value="Shirgaon">Shirgaon</option>
                      <option value="Shirpur">Shirpur</option>
                      <option value="Shirwal">Shirwal</option>
                      <option value="Shivaji Nagar">Shivaji Nagar</option>
                      <option value="Shrigonda">Shrigonda</option>
                      <option value="Sillod">Sillod</option>
                      <option value="Sindhudurg">Sindhudurg</option>
                      <option value="Sindi">Sindi</option>
                      <option value="Sinnar">Sinnar</option>
                      <option value="Sirur">Sirur</option>
                      <option value="Solapur">Solapur</option>
                      <option value="Sonegaon">Sonegaon</option>
                      <option value="Soygaon">Soygaon</option>
                      <option value="Srivardhan">Srivardhan</option>
                      <option value="Surgana">Surgana</option>
                      <option value="Talegaon Dabhade">Talegaon Dabhade</option>
                      <option value="Taloda">Taloda</option>
                      <option value="Tarapur">Tarapur</option>
                      <option value="Tasgaon">Tasgaon</option>
                      <option value="Telhara">Telhara</option>
                      <option value="Thane">Thane</option>
                      <option value="Trimbak">Trimbak</option>
                      <option value="Tuljapur">Tuljapur</option>
                      <option value="Tumsar">Tumsar</option>
                      <option value="Udgir">Udgir</option>
                      <option value="Ulhasnagar">Ulhasnagar</option>
                      <option value="Umarga">Umarga</option>
                      <option value="Umarkhed">Umarkhed</option>
                      <option value="Umred">Umred</option>
                      <option value="Uran">Uran</option>
                      <option value="Vada">Vada</option>
                      <option value="Vaijapur">Vaijapur</option>
                      <option value="Varangaon">Varangaon</option>
                      <option value="Vasind">Vasind</option>
                      <option value="Vengurla">Vengurla</option>
                      <option value="Virar">Virar</option>
                      <option value="Vite">Vite</option>
                      <option value="Wadgaon">Wadgaon</option>
                      <option value="Wai">Wai</option>
                      <option value="Wani">Wani</option>
                      <option value="Wardha">Wardha</option>
                      <option value="Warora">Warora</option>
                      <option value="Warud">Warud</option>
                      <option value="Washim">Washim</option>
                      <option value="Yaval">Yaval</option>
                      <option value="Yavatmal">Yavatmal</option>
                      <option value="Yeola">Yeola</option>
                    </select>
                  </div>
                  <div className="col-sm-4 mb-3">
                    <p className="mb-0">House No.</p>
                    <div className="">
                      <input
                        type="text"
                        id="typeText"
                        placeholder="Type here"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-sm-4 col-6 mb-3">
                    <p className="mb-0">Zip</p>
                    <div className="">
                      <input
                        type="text"
                        id="typeText"
                        placeholder="123456"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault1"
                  >
                    Save this address
                  </label>
                </div>

                <div className="float-start">
                  <button className="btn btn-info border">
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
            {/* Checkout */}
          </div>

          <div className="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
            <div className="ms-lg-4 mt-4 mt-lg-0" style={{ maxWidth: "320px" }}>
              <h6 className="mb-3">Order Summary</h6>
              <div className="d-flex justify-content-between">
                <p className="mb-2">Total price:</p>
                <p className="mb-2">&#8377; 195.90</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-2">Discount:</p>
                <p className="mb-2 text-success">- &#8377; 60.00</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-2">Shipping cost:</p>
                <p className="mb-2">+ &#8377; 14.00</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p className="mb-2">Total price:</p>
                <p className="mb-2 fw-bold">&#8377; 149.90</p>
              </div>
              <div className="input-group mt-3 mb-4">
                <input
                  type="text"
                  className="form-control border"
                  name
                  placeholder="Promo code"
                />
                <button className="btn btn-light text-primary border">
                  Apply
                </button>
              </div>
              <hr />
              <h6 className="text-dark my-4">Items in cart</h6>
              <div className="d-flex align-items-center mb-4">
                <div className="me-3 position-relative">
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                    1
                  </span>
                  <img
                    src="/images/book.png"
                    style={{ height: "96px", width: "96x" }}
                    className="img-sm rounded border"
                  />
                </div>
                <div className>
                  <a href="#" className="nav-link">
                    Book Name <br />
                    Book Genre
                  </a>
                  <div className="price text-muted">Total: &#8377; 295.99</div>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div className="me-3 position-relative">
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                    1
                  </span>
                  <img
                    src="/images/book.png"
                    style={{ height: "96px", width: "96x" }}
                    className="img-sm rounded border"
                  />
                </div>
                <div className>
                  <a href="#" className="nav-link">
                    Book Name <br />
                    Book Genre
                  </a>
                  <div className="price text-muted">Total: &#8377; 217.99</div>
                </div>
              </div>
              <div className="">
                <button className="btn btn-warning border w-100">
                  Make Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Checkout;
