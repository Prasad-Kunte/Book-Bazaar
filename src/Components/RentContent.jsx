import { Link } from "react-router-dom";
import { useEffect } from "react";
function RentContent()
{
  useEffect(() => {
    
    window.scrollTo(0, 0);
  
  
  }, []);
  
    var array2 = [
        {
          "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_-CV4k0qUBAveSa4brbKsfgTHT9eaYDppEnjhpEB8AyH9hSi",
          "name":"The Shining",
          "Author":"Stephen King",
          "year":1977,
          "genre":"Horror"
          },
          {
            "src": "https://m.media-amazon.com/images/I/91PccdgkToL.jpg",
            "name":"IT",
            "Author":"Stephen King",
            "year":"15 September 1986",
            "genre":"Horror"
            },
            {
              "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKnPw5w8T33N7AbBxJQce05nBF-xXp_N9-w&usqp=CAU",
              "name":"House of Leaves",
              "Author":"Mark Z. Danielewski",
              "year":"March 2000",
              "genre":"Horror"
              },
              {
                "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-pchMY0IEW5RmLvyTff-2r2TeDuOm4p0iN5_s5denZ87MNesm",
                "name":"Bird Box",
                "Author":"Josh Malerman",
                "year":"March 27, 2014",
                "genre":"Horror"
                },
                {
                  "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRtw3Lu4bi1AvwC_LEb6JZ6d0kd2rCU74IEujUhzswSJaU8uBlC",
                  "name":"Carrie",
                  "Author":"Stephen King",
                  "year":"1974",
                  "genre":"Horror"
                  },
                  {
                    "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRhTgDO81N1aSlNTEyXYwmLwuOvYeu0L0R4u1UHig8Vv9scdcGv",
                    "name":"A face in the dark and other hauntings",
                    "Author":"Ruskin Bond",
                    "year":"2004",
                    "genre":"Horror"
                    },
                    {
                        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-3TsNoOhIfPdDAuBra8JeU0W8YT3uZDJS3oVZIjjvcj0tk-Ob",
                        "name":"Call Me by Your Name",
                        "Author":"André Aciman",
                        "year":2007,
                        "genre":"ROMANCE"
                        },
                        {
                          "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzcpuRS-OxlOiCQryK9UVSGSVmEJGJPA4l6IrEXh3Y5nhdcKTj",
                          "name":"The Notebook",
                          "Author":"Nicholas Sparks",
                          "year":1996,
                          "genre":"ROMANCE"
                          },
                          {
                            "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGasNqKInCpdzxEnVUrcjaBmB8pHq99H4U7U-vQaVhElWEIwiU",
                            "name":"It Starts with Us",
                            "Author":"Colleen Hoover",
                            "year":"October 18, 2022",
                            "genre":"ROMANCE"
                            },
                            {
                              "src": "https://olivepublications.in/wp-content/uploads/2020/09/21957845-1e28-4c9c-9c50-f728be9f5f31.jpg",
                              "name":"Wuthering Heights",
                              "Author":"Emily Brontë",
                              "year":"December 1847",
                              "genre":"ROMANCE"
                              },
                              {
                                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajqjwhrVCXeHor3CXQZ0KGAZKo-sL4x1p7Y_L1eEcK1NbYS7-",
                                "name":"Outlander",
                                "Author":"Diana Gabaldon",
                                "year":"1991",
                                "genre":"ROMANCE"
                                }
                  
      ];
    const addToHorrorCard =array2.map((card) =>
   <div className="col-sm-3">
  <div
    className="card shadow-lg p-3 mb-5 bg-white rounded "
    style={{ width: "18rem" }}
  >
    <Link to="Details">
    <img
      src={card.src}
      className="card-img-top img-thumbnail"
      style={{ maxHeight: 250, minHeight: 250, maxWidth: 250, minWidth: 250 }}
      alt="..."
    />
    <div className="card-body">
      <h5 className="card-title">
        {card.name}
      </h5>
    </div>
    </Link>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        {card.Author}
      </li>
      <li className="list-group-item">
        {card.year}
      </li>
      <li className="list-group-item">
        {card.genre}
      </li>
    </ul>
    <div className="card-body">
      <a href="#" className="card-link"></a>
      <button className="card-link btn btn-primary">
        Make Deal
      </button>
    </div>
  </div>
</div>

 )
    return(<> 
     <div className="container-fluid">
        <div className=" row ">          
                {addToHorrorCard}
        </div>
    </div>
       </>);
}
export default RentContent;