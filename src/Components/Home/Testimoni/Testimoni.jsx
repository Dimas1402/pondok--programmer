import React from "react";
import "./Testimoni.scss";
import Amar from "../../../Asset/people/amar.png";
import Bae from "../../../Asset/people/bae.jpg";
import Roihan from "../../../Asset/people/roihan.jpg";
import Wahyudi from "../../../Asset/people/wahyudi.jpg";
import Sidik from "../../../Asset/people/sidik.jpg";
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
                src={Amar}
                className="mx-auto d-block"
                alt="..."
              />

              <div className="card mx-auto d-block">
                <div className="card-body mt-5">
                  <i className="fa fa-quote-left"></i>
                  <h5 className="card-title text-center">Amar Khoirudin</h5>
                  <p className="card-text text-center">
                    Setelah Mengikuti Kurikulum yang ada disini akhirnya saya
                    banyak yang saya ketahui tentang programmer
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
                src={Bae}
                className="mx-auto d-block"
                alt="..."
              />

              <div className="card mx-auto d-block">
                <div className="card-body mt-5">
                  <i className="fa fa-quote-left"></i>
                  <h5 className="card-title text-center">Bae</h5>
                  <p className="card-text text-center">
                    ngoding itu tidak sesulit apa yang saya bayangkan.dengan
                    arahan mentor dan teman-teman yang saling memotivasi,saya
                    bisa sampai sejauh ini.saya sudah dapat mengerti apa itu
                    pseudo coode,algoritma,serta logic dalam programming.
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
            <div className="col-md-4">
              <img
                style={{ borderRadius: "50%" }}
                src={Roihan}
                className="mx-auto d-block"
                alt="..."
              />

              <div className="card mx-auto d-block">
                <div className="card-body mt-5">
                  <i className="fa fa-quote-left"></i>
                  <h5 className="card-title text-center">
                    Roihan Mishbahul Anam
                  </h5>
                  <p className="card-text text-center">
                    Alhamdulillah dengan mengikuti kurikulum yang ada di sini,
                    saya bisa menjadi lebih berkembang dengan adanya mentor dan
                    Alhamdulillah lingkungannya sudah islami dan banyak
                    teman-teman yang sholeh in syaa Allah.
                  </p>
                  <div className="text-right">
                    <i className="fa fa-quote-right "></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img
                style={{ borderRadius: "50%" }}
                src={Wahyudi}
                className="mx-auto d-block"
                alt="..."
              />

              <div className="card mx-auto d-block">
                <div className="card-body mt-5">
                  <i className="fa fa-quote-left"></i>
                  <h5 className="card-title text-center">Muhammad Wahyudi</h5>
                  <p className="card-text text-center">
                    Alhamdulillah selama disini saya mendapat banyak arahan ilmu
                    programming dari mentor dan juga didukung oleh lingkungan
                    yang nyaman.
                  </p>
                  <div className="text-right">
                    <i className="fa fa-quote-right "></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img
                style={{ borderRadius: "50%" }}
                src={Sidik}
                className="mx-auto d-block"
                alt="..."
              />

              <div className="card mx-auto d-block">
                <div className="card-body mt-5">
                  <i className="fa fa-quote-left"></i>
                  <h5 className="card-title text-center">Muhammad Sidik</h5>
                  <p className="card-text text-center">
                    Sebelum ikut pelatihan disini, saya tidak memiliki keahlian
                    programming, maka saya berkeinginan untuk belajar dan disini
                    tidak perlu waktu lama saya sudah dapat menguasai
                    programming
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