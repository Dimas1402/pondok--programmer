import React from "react";
import "./Footer.scss";

const Footers = () => {
  return (
    <div className="Footers">
      <div className="row terhubung">
        <div className="container">
          <div className="col-md-12 d-flex justify-content-between pt-3 pb-3 text-white">
            <h5>Terhubung dengan kami di Sosial Media</h5>
            <div>
              <i className="fa fa-facebook mr-3"></i>
              <i className="fa fa-twitter mr-3"></i>
              <i className="fa fa-google-plus mr-3"></i>
              <i className="fa fa-linkedin mr-3"></i>
              <i className="fa fa-instagram mr-3"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="row all">
        <div className="container ">
          <div className="col-md-12 text-white cf mt-3">
            <div className="contact mr-4">
                    <h2>Contact</h2>
                    {/* <hr className="hr mb-5"/> */}
                    <p>
                      <i className="fa fa-map-marker mr-3"></i>
                      Gegunung, Tirtohargo, Kec. Kretek, Bantul, Daerah Istimewa
                      Yogyakarta 55772
                    </p>
                    <p>
                      <i className="fa fa-phone mr-3"></i>
                      +6285228802828
                    </p>
                    <p>
                      <i className="fa fa-envelope mr-3"></i>
                      pondokprogrammer@gmail.com
                    </p>
            </div>
            <div className="tentang">
                    <h2>Tentang</h2>
                    {/* <hr className="rr "/> */}
                    <p>Pondok Programmer merupakan komunitas IT berbasis pondok yang senantiasa berusaha mendidik santrinya untuk berakhlaq mulia, profesional serta bermanfaat untuk ummat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footers;