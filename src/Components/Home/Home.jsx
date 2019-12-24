import React from 'react'
import Caraousel from '../Caraousel/Caraousel'
import Teknologi from './Teknologi/Teknologi'
import './Home.scss'
// import WithNavbar from '../Navbar/WithNavbar'
import NavbarContainer from '../../Container/Navbar/NavbarContainer'

const Home = () => {
  return (
    <>
      <NavbarContainer />
      <Caraousel />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 style={{ height: '50vh' }} className='text-center'>
              Pendidikan
            </h1>
            {/* isi fokus pendidikan marrrr */}
          </div>
          <div className='col-md-12 teknologi'>
            <Teknologi />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
