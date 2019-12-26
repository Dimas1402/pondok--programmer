import React from 'react'
import Caraousel from '../Caraousel/Caraousel'
import Teknologi from './Teknologi/Teknologi'
import './Home.scss'
// import WithNavbar from '../Navbar/WithNavbar'
import NavbarContainer from '../../Container/Navbar/NavbarContainer'
import Pendidikan from './Pendidikan/Pendidikan'
import Support from "./Support/Support"
import TentangKami from './Tentang Kami/TentangKami'

const Home = () => {
  return (
    <>
      <NavbarContainer />

      <Caraousel />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 pendidikan' id="Pendidikan">
            <Pendidikan/>
          </div>
          <div className='col-md-12 teknologi'>
            <Teknologi />
          </div>
          <div className='col-md-12 pendidikan' id="Tentang">
            <TentangKami/>
          </div>
          <div className='col-md-12 mt-5'>
            <Support/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
