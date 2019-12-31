import React from 'react'
import './Navbar.scss'
import Logo from '../../Asset/Navbar/nav-brand.svg'

const Navbar = ({ background, boxShadow, idnav }) => {
  return (
    <nav
      style={{ background: `${background}`, boxShadow: `${boxShadow}` }}
      className='navbar navbar-expand-lg  fixed-top'
      id={idnav}
    >
      <img src={Logo} alt='' />
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
     <i style={{color:"white"}} className="fa fa-stream"></i>
      </button>
      <div className='collapse navbar-collapse navbar-utama' id='navbarNav'>
        <div className='mr-auto'></div>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <a className='nav-link' href='#Beranda'>
              Beranda
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#Pendidikan'>
              Pendidikan
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#Tentang'>
              Tentang Kami
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#Support'>
              Support
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#Portofolio'>
              Portofolio
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#Testimoni'>
              Testimoni
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#Testimoni'>
              Akademi            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#Blog'>
              Blog
            </a>
          </li>
          <li className='nav-item'>
            <div className="box-login">
            <a className='nav-link' href='#Login'>
              Login
            </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
