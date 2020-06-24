import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/firebase.util'

import { ReactComponent as Logo } from '../../asserts/logo.svg'

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>

    <div className="options">
      <Link className='option' to='/shop'>
        SHOP
         </Link>
      <Link className='option' to='/shop'>
        CONTACT
         </Link>
      {
        currentUser ?
          <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
          :
          <Link className='option' to='/signin'>SING IN</Link>
      }
    </div>

  </div>
)


export default Header;