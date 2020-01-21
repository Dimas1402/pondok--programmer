import React from 'react'
import Logo from '../../Asset/Navbar/nav-brand.svg'
import { Link } from 'react-router-dom'

const NavbarTwo = () => {
  return (
    <nav className='navbar fixed-top'>
      <Link to='/'>
        <img src={Logo} alt='' />
      </Link>
    </nav>
  )
}

export default NavbarTwo
