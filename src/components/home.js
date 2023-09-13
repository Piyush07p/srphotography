import React, { useRef, useState } from 'react'
import '../css/home.scss'
import { NavLink } from 'react-router-dom'
import workData from "../Api/work"
import serviceData from "../Api/service-data"
import printData from "../Api/printing"

const Home = () => {

  const [wData, setwData] = useState(workData)
  const [serData, setserData] = useState(serviceData)
  const [prinData, setprinData] = useState(printData)
  const [flag, setflag] = useState(true)
  const expDiv = useRef("")
  const expandDiv = () => {
    if (flag) {
      expDiv.current.style.height = "100%"
    } else {
      expDiv.current.style.height = "45rem"
    }
    setflag(!flag)
  }

  return (
    <>
      <section className='home_sec'>
        <div className='slider_div'>
          <div>
            <img className='img' width=" 30rem" src={require("./images/cover_photo.jpg")} alt="" />
            <img className='img' width=" 30rem" src={require("./images/cover_photo.jpg")} alt="" />
            <img className='img' width=" 30rem" src={require("./images/cover_photo.jpg")} alt="" />
            <img className='img' width=" 30rem" src={require("./images/cover_photo.jpg")} alt="" />

          </div>
        </div>

        {/* --------------(())--------------- */}

        <div className="detail_div">
          <div className='home_img'>

            <div>
              <img src={require("./images/photgraph1.png")} alt="img" />
            </div>
            <div>
              <img src={require("./images/srlogo.png")} alt="img" />
            </div>

          </div>

          <div className='home_about'>
            <div>
            <h1> <span style={{ color: "red" }}>S</span>r Photography</h1>
            <h3>Shankar Studio</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur earum hic delectus
              reprehenderit neque dolore rerum quasi amet totam?
              reprehenderit neque dolore rerum quasi amet totam?
              reprehenderit neque dolore rerum quasi amet totam?
             
             
            </p>
            </div>
          </div>
        </div>

        {/* ----------------------------(end)----------------------------- */}

        {/* -----------------------(book_us)---------------------------- */}

        <div className='book_us_div'>
          <div>
            <h1>Book us Now</h1>
            <h3>We do what you demand on time and affordable price</h3>
            <button>
              <NavLink className='book-btn' style={{ fontWeight: "600", textDecoration: "none" }} to="/Services">Book Now</NavLink>
            </button>
          </div>
        </div>

        {/* ----------------------------(end)------------------------------- */}

        {/* ----------------------------(work)--------------------------------- */}
        <div className="work">
          <h1>Our Highlights</h1>
          <div>

            {
              wData.map((e) => {
                return (
                  <>
                    <div>
                      <img src={require(`${e.link}`)} alt="" />
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
        {/* ---------------------(end)---------------------------- */}

        {/* -------------------(services)------------------------ */}
        <div className='home_service'>
          <h1>Our Services</h1>
          <div>
            {
              serData.map((e) => {
                return (
                  <>
                    <div>
                      <h1>{e.name}</h1>
                      <h3>{e.price}</h3>
                      <button>
                        <NavLink style={{ textDecoration: "none" }} to="/Services">BOOK</NavLink>
                      </button>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>

        <div className="printItem">
          <h1>Sublimation Printing</h1>
          <div ref={expDiv} >
            {
              printData.map((e) => {
                return (
                  <>
                    <div>
                      <h1>{e.name}</h1>
                      <img src={require(`${e.img}`)} alt="" />
                      <h3>{e.buy}</h3>
                      <button>
                        <NavLink style={{ color: "#fff", textDecoration: "none" }} to="/Product">
                          Buy
                        </NavLink>
                      </button>
                    </div>
                  </>
                )
              })
            }

          </div>
          <button onClick={expandDiv}>{(flag) ? "See More" : "See Less"}</button>
        </div>
        <div style={{ height: "10rem" }}>

        </div>
      </section>
    </>
  )
}

export default Home