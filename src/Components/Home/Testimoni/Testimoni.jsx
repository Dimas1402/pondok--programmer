import React from "react";
import "./Testimoni.scss";
import Hasan from "../../../Asset/Testimoni/hasan.png";
import ibnu from "../../../Asset/Testimoni/ibnu.jpg";
import Aji from "../../../Asset/Testimoni/aji.png";
import Budi from "../../../Asset/Testimoni/Budi.jpeg";
// import Sidik from "../../../Assets/people/sidik.jpg";
// import ScrollAnimation from "react-animate-on-scroll";

const Testimoni = () => {
  return (
    <div className="row test mb-5 d-flex justify-content-center row-testimoni">
      <div className="col-md-12  text-center">
        {/* <ScrollAnimation animateIn="fadeInDown"> */}
          <h1 className="testimoni-title">Testimoni</h1>
        {/* </ScrollAnimation> */}
      </div>
      {/* <ScrollAnimation animateIn="fadeIn"> */}
        <div className="col-md-12 card-img ">
          <div className="row">
            <div className="col-md-6">
              <img
                style={{ borderRadius: "50%" }}
                src={Hasan}
                className="mx-auto d-block"
                alt="..."
              />

              <div className="card mx-auto d-block">
                <div className="card-body mt-5">
                  <i className="fa fa-quote-left"></i>
                  <h5 className="card-title text-center">Hasan Basri</h5>
                  <p className="card-text text-center">
                  I have joined so many IT forums, but no one uphold Sunnah like this. Mashallah, I ‘m proud and grateful.
                  </p>
                  <div className="text-right">
                    <i className="fa fa-quote-right "></i>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="col-md-6">
              <img
                style={{ borderRadius: "50%" }}
                src={ibnu}
                className="mx-auto d-block"
                alt="..."
              />

              <div className="card mx-auto d-block">
                <div className="card-body mt-5">
                  <i className="fa fa-quote-left"></i>
                  <h5 className="card-title text-center">Akbar Ibnu Solla</h5>
                  <p className="card-text text-center">
                  Pondok Programmer is a lovely place, with highly conditioned environment on religion aspect and IT aspect.
                  </p>
                  <div className="text-right">
                    <i className="fa fa-quote-right "></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </ScrollAnimation> */}
      {/* <ScrollAnimation animateIn="fadeIn"> */}
        <div className="col-md-12 card-img">
          <div className="row">
            <div className="col-md-6">
              <img
                style={{ borderRadius: "50%" }}
                src={Aji}
                className="mx-auto d-block"
                alt="..."
              />

              <div className="card mx-auto d-block">
                <div className="card-body mt-5">
                  <i className="fa fa-quote-left"></i>
                  <h5 className="card-title text-center">
                  Anugrah Setiaji
                  </h5>
                  <p className="card-text text-center">
                  Pondok Programmer seems to be my second home. A great place to study at and a great family i feel amazed to be with. Yet sometimes I miss my real family.
                  </p>
                  <div className="text-right">
                    <i className="fa fa-quote-right "></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                style={{ borderRadius: "50%" }}
                src={Budi}
                className="mx-auto d-block"
                alt="..."
              />

              <div className="card mx-auto d-block">
                <div className="card-body mt-5">
                  <i className="fa fa-quote-left"></i>
                  <h5 className="card-title text-center">Dika Budi Aji</h5>
                  <p className="card-text text-center">
                  Pondok Programmer is The Best place to learn programming for who have passion in that.
                  </p>
                  <div className="text-right">
                    <i className="fa fa-quote-right "></i>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      {/* </ScrollAnimation> */}
    </div>
  );
};

export default Testimoni;
