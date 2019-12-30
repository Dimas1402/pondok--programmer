import React from 'react'
import asset1 from '../../Asset/Home/Asset1.png'
import asset2 from '../../Asset/Home/Asset2.png'
import asset3 from '../../Asset/Home/Asset3.png'
import asset4 from '../../Asset/Home/Asset4.png'
import './Caraousel.scss'


const Caraousel = () => {
  return (
    <div
      id='carouselExampleIndicators'
      className='carousel slide c-box mb-5'
      data-ride='carousel'
    >
      <ol className='carousel-indicators'>
        <li
          data-target='#carouselExampleIndicators'
          data-slide-to={0}
          className='active'
        />
        <li data-target='#carouselExampleIndicators' data-slide-to={1} />
        <li data-target='#carouselExampleIndicators' data-slide-to={2} />
        <li data-target='#carouselExampleIndicators' data-slide-to={3} />
      </ol>
      <div className='carousel-inner' id="Beranda">
        <div className='carousel-item active  '>
          <div className='card'>
            <div className='card-body'>
              <h5>BERTAQWA</h5>
              <p>
                Fokus pendidikan santri dalam bidang kerohanian islam meliputi
                pemahaman aqidah, pembentukan akhlaqul karimah, pemantapan
                ibadah, serta pencetakan generasi quran
              </p>
            </div>
          </div>

          <img src={asset1} className='d-block w-100' alt='...' />
        </div>
        <div className='carousel-item justify-content-center '>
          <div className='card'>
            <div className='card-body'>
              <h5>PROFESIONAL</h5>
              <p>
                Fokus pendidikan santri dalam bidang pemograman meliputi
                pemahaman dasar algoritma pemograman pengunaan library dan
                framework serta project challange
              </p>
            </div>
          </div>

          <img src={asset2} className='d-block w-100' alt='...' />
        </div>
        <div className='carousel-item justify-content-center '>
          <div className='card'>
            <div className='card-body'>
              <h5>Mandiri</h5>
              <p>
                Mempersiapkan santri untuk membiayai hidupnya sendiri dengan
                menyalurkannya magang atau bekerja pada perusahaan , kerja
                remote, membangun startup, serta menjadi tenaga pengajar dalam
                bidang pemograman
              </p>
            </div>
          </div>

          <img src={asset3} className='d-block w-100' alt='...' />
        </div>
        <div className='carousel-item justify-content-center '>
          <div className='card'>
            <div className='card-body'>
              <h5>BERBAGI</h5>
              <p>
                Memberikan pendidikan kepada santri untuk bisa saling berbagi
                setelah mereka mampu membiayai hidupnya sendiri kepada adik
                kelasnya maupun orang lain
              </p>
            </div>
          </div>

          <img src={asset4} className='d-block w-100' alt='...' />
        </div>
      </div>
    </div>
  )
}
export default Caraousel
