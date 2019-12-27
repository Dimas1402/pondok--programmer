import React from 'react'
import './TentangKami.scss'

const TentangKami = () => {
  return (
    <div className='row'>
      <div className='col-md-12 mt-5 pb-5 pt-5 tentang-kami text-center'>
        <h1 className='text-white'>Tentang Pondok Programmer</h1>
        <div className="container">
        <h3 className='pt-5 text-white'>
          Pondok Programmmer adalah sebuah tempat pendidikan programming non
          formal berbasis pondok yang berada di wilayah Yogyakarta. Pondok
          Programmer membekali santrinya dengan ilmu agama dan ilmu Programming{' '}
        </h3>
        </div>
        <div className='row d-flex justify-content-between'>
          <div className='mt-5 pl-4 pr-4 visi'>
            <h3 className='bg-white pt-3 pb-3'>VISI</h3>
            <p className='bg-white pl-2 pr-2 pt-3 pb-3'>
              Menjaga lembaga pendidikan terbaik di indonesia yang dapat
              menciptakan santri yang bertaqwa, profesional, mandiri dan berbagi
            </p>
          </div>
          <div className='mt-5 pl-4 pr-4 misi'>
            <h3 className='bg-white pt-3 pb-3'>MISI</h3>
            <p className='bg-white pl-2 pr-2 pt-3 pb-3'>
              Memberikan pendidikan kepada santri agar bersemangat mempelajari
              agama serta mengamalkan dalam kehidupan sehari-hari (BERTAQWA).
              Memberikan pendidikan kepada santri agar bersemangat serta teku
              mengasah kemampuan dalam bidang yang digelutinya (PROFESIONAL).
              Mempersiapkan santri untuk dapat membiayai hidupnya sendiri
              (MANDIRI). Memberikan pendidikan kepada santri untuk bisa saling
              berbagi setelah mampu membiayai hidupnya sendiri (BERBAGI)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TentangKami
